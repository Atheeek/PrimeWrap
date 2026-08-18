import { SITE_URL } from "@/lib/seo";

type FormSubmitFieldsProps = {
  subject?: string;
};

export function FormSubmitFields({ subject = "New PrimeWrap Inquiry" }: FormSubmitFieldsProps) {
  return (
    <>
      <input type="hidden" name="_next" value={`${SITE_URL}/thank-you`} />
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
    </>
  );
}
