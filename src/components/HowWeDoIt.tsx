import {
  MessageSquareDashed,
  PencilRuler,
  ScrollText,
  CalendarClock,
  PaintRoller,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We understand your vision and space requirements to craft a tailored solution.",
    icon: MessageSquareDashed,
    meta: "CONSULT • DISCOVER • DEFINE",
  },
  {
    num: "02",
    title: "Measure & Design",
    desc: "Precise measurements and premium material selection from our extensive catalog.",
    icon: PencilRuler,
    meta: "MEASURE • DESIGN • SELECT",
  },
  {
    num: "03",
    title: "Proposal",
    desc: "Transparent quotation with samples for your absolute approval before we begin.",
    icon: ScrollText,
    meta: "PROPOSE • REVIEW • APPROVE",
  },
  {
    num: "04",
    title: "Schedule",
    desc: "We book a convenient installation time that suits your busy schedule seamlessly.",
    icon: CalendarClock,
    meta: "PLAN • SCHEDULE • PREPARE",
  },
  {
    num: "05",
    title: "Installation",
    desc: "Meticulous installation by our experts, finishing with a thorough walkthrough.",
    icon: PaintRoller,
    meta: "INSTALL • FINISH • DELIVER",
  },
];

const HowWeDoIt = () => {
  return (
    <section className="relative bg-[#efeeea] font-display selection:bg-orange selection:text-white pt-24 pb-8 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-24">

          {/* =====================================================
              LEFT COLUMN — STICKY INTRO
          ====================================================== */}
          <div className="z-20 flex w-full flex-col justify-start lg:sticky lg:top-32 lg:w-1/3">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-orange" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange">
                Our Process
              </span>
            </div>

            <h2 className="mb-8 text-4xl font-semibold uppercase leading-[0.95] tracking-tighter text-navy md:text-5xl lg:text-6xl xl:text-7xl">
              From Idea
              <br />
              <span className="text-gray-400">To Finish.</span>
            </h2>

            <p className="max-w-sm text-lg font-light leading-relaxed text-gray-500">
              Every project follows a considered process — from understanding
              the space to the final meticulous installation.
            </p>

            {/* Small editorial detail */}
            <div className="mt-10 hidden border-t border-navy/10 pt-5 lg:block">
              <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.25em] text-navy/30">
                <span>PrimeWrap Studio</span>
                <span>Process / 05</span>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN — STICKY STACK
          ====================================================== */}
          <div className="relative w-full pb-24 md:pb-48 lg:w-2/3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="sticky top-28 flex w-full justify-center md:top-32"
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  {/* =================================================
                      STACKING SPACE
                  ================================================== */}
                  <div className="flex h-[55vh] w-full items-start pt-8 md:h-[60vh]">

                    {/* =================================================
                        CARD
                    ================================================== */}
                    <article
                      className="
                        group
                        relative
                        flex
                        h-full
                        w-full
                        overflow-hidden
                        border
                        border-navy/[0.08]
                        bg-white
                        shadow-[0_-12px_45px_rgba(20,35,70,0.07)]
                        transition-all
                        duration-500
                        hover:shadow-[0_-16px_55px_rgba(20,35,70,0.11)]
                      "
                    >
                      {/* =============================================
                          ARCHITECTURAL GRID
                      ============================================== */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          opacity-40
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to right,
                              rgba(20,35,70,0.035) 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              to bottom,
                              rgba(20,35,70,0.035) 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "48px 48px",
                        }}
                      />

                      {/* =============================================
                          SOFT TECHNICAL GRID — RIGHT SIDE
                      ============================================== */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          right-0
                          top-0
                          h-full
                          w-[48%]
                          opacity-60
                        "
                        style={{
                          backgroundImage: `
                            linear-gradient(
                              to right,
                              rgba(20,35,70,0.05) 1px,
                              transparent 1px
                            ),
                            linear-gradient(
                              to bottom,
                              rgba(20,35,70,0.05) 1px,
                              transparent 1px
                            )
                          `,
                          backgroundSize: "32px 32px",
                          maskImage:
                            "linear-gradient(to left, black, transparent)",
                          WebkitMaskImage:
                            "linear-gradient(to left, black, transparent)",
                        }}
                      />

                      {/* =============================================
                          ORANGE ARCHITECTURAL EDGE
                      ============================================== */}
                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          top-0
                          z-20
                          w-[2px]
                          origin-bottom
                          bg-orange
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-y-100
                        "
                      />

                      {/* =============================================
                          OVERSIZED BACKGROUND NUMBER
                      ============================================== */}
                      <div
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          -bottom-12
                          -left-4
                          select-none
                          text-[13rem]
                          font-semibold
                          leading-none
                          tracking-[-0.08em]
                          text-navy/[0.035]
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:-translate-y-3
                          md:-bottom-16
                          md:text-[18rem]
                        "
                      >
                        {step.num}
                      </div>

                      {/* =============================================
                          TOP TECHNICAL MARKERS
                      ============================================== */}
                      <div className="absolute right-8 top-8 z-20 flex items-center gap-4 md:right-12 md:top-10">
                        <span className="hidden text-[9px] font-semibold uppercase tracking-[0.25em] text-navy/25 sm:block">
                          Process
                        </span>

                        <span className="h-px w-8 bg-orange/50" />

                        <span className="text-[10px] font-semibold tracking-[0.2em] text-navy/40">
                          {step.num} / 05
                        </span>
                      </div>

                      {/* =============================================
                          ICON — NO BOX
                      ============================================== */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-16
                          z-10
                          md:right-12
                          md:top-20
                        "
                      >
                        {/* secondary orange technical circle */}
                        <div
                          className="
                            absolute
                            -inset-5
                            rounded-full
                            border
                            border-orange/10
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />

                        {/* icon */}
                        <Icon
                          strokeWidth={0.9}
                          className="
                            relative
                            h-24
                            w-24
                            text-navy/[0.10]
                            transition-all
                            duration-700
                            group-hover:-translate-y-1
                            group-hover:text-orange/[0.18]
                            md:h-36
                            md:w-36
                          "
                        />
                      </div>

                      {/* =============================================
                          CORNER REGISTRATION MARK
                      ============================================== */}
                      <div className="absolute right-8 bottom-8 z-20 md:right-12 md:bottom-10">
                        <div className="relative h-5 w-5">
                          <span className="absolute left-0 top-0 h-px w-5 bg-orange/50" />
                          <span className="absolute left-0 top-0 h-5 w-px bg-orange/50" />
                        </div>
                      </div>

                      {/* =============================================
                          MAIN CONTENT
                      ============================================== */}
                      <div className="relative z-20 flex h-full w-full flex-col p-8 md:p-14 lg:p-16">

                        {/* Step Label */}
                        <div className="flex items-center gap-4">
                          <span className="h-px w-7 bg-orange" />

                          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gray-400">
                            Step — {step.num}
                          </span>
                        </div>

                        {/* Main Content */}
                        <div className="mt-auto max-w-[650px] pb-12 md:pb-14">

                          {/* Title */}
                          <h3
                            className="
                              max-w-[620px]
                              text-3xl
                              font-semibold
                              uppercase
                              leading-[0.88]
                              tracking-tighter
                              text-navy
                              transition-colors
                              duration-500
                              md:text-4xl
                              lg:text-5xl
                            "
                          >
                            {step.title}
                          </h3>

                          {/* Orange divider */}
                          <div className="my-6 flex items-center gap-3">
                            <span className="h-[2px] w-12 bg-orange" />
                            <span className="h-px w-20 bg-navy/10" />
                          </div>

                          {/* Description */}
                          <p className="max-w-md text-base font-light leading-relaxed text-gray-500 md:text-xl">
                            {step.desc}
                          </p>
                        </div>

                        {/* =========================================
                            BOTTOM METADATA
                        ========================================== */}
                        <div className="relative z-20 mt-auto hidden items-center justify-between border-t border-navy/[0.08] pt-5 md:flex">

                          <div className="flex items-center gap-4">
                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-navy/30">
                              PrimeWrap Studio
                            </span>

                            <span className="h-1 w-1 rounded-full bg-orange" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-navy/30">
                              Process Protocol
                            </span>
                          </div>

                          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-navy/20">
                            {step.meta}
                          </span>
                        </div>

                        {/* Mobile metadata */}
                        <div className="relative z-20 flex items-center justify-between border-t border-navy/[0.08] pt-4 md:hidden">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-navy/30">
                            PrimeWrap
                          </span>

                          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-navy/30">
                            {step.num} / 05
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;