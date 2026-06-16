import { createFileRoute } from "@tanstack/react-router";
const pdfUrl = "/wedding-invite.pdf";
import botanical from "@/assets/botanical-bg.jpg";

export const Route = createFileRoute("/invitation")({
  component: InvitationPage,
});

function InvitationPage() {

  const petals = Array.from({ length: 14 });

  return (
    <main className="relative min-h-screen overflow-hidden animate-[fadeIn_0.6s_ease_both]">
      {/* Decorative background */}
      <img
        src={botanical}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,var(--ivory)_80%)]" />

      {/* Falling petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((_, i) => {
          const left = (i * 7.3) % 100;
          const delay = (i * 1.7) % 12;
          const duration = 12 + ((i * 3) % 10);
          const size = 8 + ((i * 5) % 10);
          return (
            <span
              key={i}
              className="absolute block rounded-full bg-sage-soft/60 animate-petal"
              style={{
                left: `${left}%`,
                top: "-5%",
                width: size,
                height: size * 0.6,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                filter: "blur(.3px)",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="text-center animate-reveal">
          <div className="flex items-center justify-center gap-3 text-sage">
            <span className="h-px w-16 bg-sage/40" />
            <span className="text-[0.7rem] uppercase tracking-[0.5em]">Together with their families</span>
            <span className="h-px w-16 bg-sage/40" />
          </div>

          <h1 className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl text-sage-deep leading-[1]">
            Catherine
            <span className="font-script block text-7xl sm:text-8xl text-sage my-2">&</span>
            Luke
          </h1>

          <p className="mt-6 font-display italic text-xl sm:text-2xl text-sage-deep/80">
            request the pleasure of your company
          </p>

          <div className="mt-8 inline-flex items-center gap-6 text-sage-deep">
            <div className="text-right">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Wednesday</div>
              <div className="font-display text-3xl">June</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-px w-8 bg-sage/40" />
              <div className="font-display text-6xl sm:text-7xl px-2 my-1">16</div>
              <div className="h-px w-8 bg-sage/40" />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Two Thousand</div>
              <div className="font-display text-3xl">Twenty-Seven</div>
            </div>
          </div>
        </header>

        {/* PDF Frame */}
        <section
          className="mt-14 mx-auto animate-reveal"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            {/* Ornate corners */}
            <Corner className="absolute -top-3 -left-3" />
            <Corner className="absolute -top-3 -right-3 rotate-90" />
            <Corner className="absolute -bottom-3 -left-3 -rotate-90" />
            <Corner className="absolute -bottom-3 -right-3 rotate-180" />

            <div className="rounded-2xl bg-ivory border border-sage/25 p-3 sm:p-4 shadow-[var(--shadow-petal)]">
              <div className="rounded-xl overflow-hidden bg-secondary/50 ring-1 ring-sage/15">
                <object
                  data={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                  type="application/pdf"
                  className="block w-full h-[78vh] min-h-[600px] bg-ivory"
                  aria-label="Wedding invitation PDF"
                >
                  <div className="p-10 text-center">
                    <p className="text-sage-deep">Your browser can't display the PDF inline.</p>
                    <a
                      href={pdfUrl}
                      className="mt-4 inline-block underline text-sage"
                      target="_blank" rel="noreferrer"
                    >
                      Open the invitation
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-8 py-3 text-sm uppercase tracking-[0.25em] text-ivory transition hover:bg-sage-deep shadow-[var(--shadow-soft)]"
            >
              View full screen
            </a>
            <a
              href={pdfUrl}
              download="Catherine-and-Luke-Invitation.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-ivory px-8 py-3 text-sm uppercase tracking-[0.25em] text-sage-deep transition hover:bg-secondary"
            >
              Download
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center">
          <p className="font-script text-3xl text-sage">with all our love</p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-muted-foreground">Catherine & Luke</p>
        </footer>
      </div>
    </main>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`h-10 w-10 text-sage/60 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 14 V4 a2 2 0 0 1 2-2 h10" />
      <path d="M6 18 V8 a2 2 0 0 1 2-2 h10" opacity=".5" />
      <circle cx="4" cy="4" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
