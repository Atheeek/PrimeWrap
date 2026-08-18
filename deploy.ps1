# ==================================================================
# CONFIG - fill these in before running
# ==================================================================
$FtpHost = "ftp.primewrap.ae"
$FtpUser = "ftpaccount@primewrap.ae"
$FtpPass = "4sf10is000@123"
$FtpPort = 21
$RemoteDir = "/"

# Adjust this if WinSCP is installed somewhere else on your machine
$WinScpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"
# ==================================================================

Write-Host "Step 1: Cleaning old build..." -ForegroundColor Cyan
Remove-Item -Recurse -Force .output, .wrangler -ErrorAction SilentlyContinue

Write-Host "Step 2: Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Stopping - nothing was uploaded." -ForegroundColor Red
    exit 1
}

Write-Host "Step 3: Starting local preview server (wrangler dev)..." -ForegroundColor Cyan
$wrangler = Start-Process -FilePath "npx" -ArgumentList "wrangler dev" -PassThru -WindowStyle Hidden

Write-Host "Step 4: Waiting for it to be ready..." -ForegroundColor Cyan
$ready = $false
for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 1
    try {
        $resp = Invoke-WebRequest -Uri "http://127.0.0.1:8787/" -UseBasicParsing -TimeoutSec 2
        if ($resp.StatusCode -eq 200 -and $resp.Content.Length -gt 100) {
            $ready = $true
            break
        }
    } catch {}
}

if (-not $ready) {
    Write-Host "Server never became ready after 30 seconds. Stopping." -ForegroundColor Red
    Stop-Process -Id $wrangler.Id -Force -ErrorAction SilentlyContinue
    exit 1
}

Write-Host "Step 5: Capturing the rendered HTML..." -ForegroundColor Cyan
Invoke-WebRequest -Uri "http://127.0.0.1:8787/" -UseBasicParsing -OutFile ".output\public\index.html"

Write-Host "Step 6: Stopping the local preview server..." -ForegroundColor Cyan
Stop-Process -Id $wrangler.Id -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

Write-Host "Step 7: Uploading to AEserver via FTP..." -ForegroundColor Cyan

if (-not (Test-Path $WinScpPath)) {
    Write-Host "Could not find WinSCP at: $WinScpPath" -ForegroundColor Red
    Write-Host "Install it from winscp.net, or fix the WinScpPath at the top of this script." -ForegroundColor Red
    exit 1
}

$winscpScript = @"
option batch abort
option confirm off
open ftp://$FtpHost`:$FtpPort/ -username=$FtpUser -password=$FtpPass
synchronize remote ".output\public" "$RemoteDir" -delete
exit
"@

$winscpScript | Out-File -Encoding ASCII "winscp_temp_script.txt"
& $WinScpPath /script="winscp_temp_script.txt"
$ftpExitCode = $LASTEXITCODE
Remove-Item "winscp_temp_script.txt" -ErrorAction SilentlyContinue

if ($ftpExitCode -ne 0) {
    Write-Host "FTP upload may have failed - check the output above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Done! Changes are live at https://primewrap.ae" -ForegroundColor Green
