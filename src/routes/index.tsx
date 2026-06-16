import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import botanical from "@/assets/botanical-bg.jpg";

export const Route = createFileRoute("/")({
  component: GatePage,
});

function GatePage() {
  const navigate = useNavigate();
  const [fading, setFading] = useState(false);

  return (
    <main className={`relative min-h-screen overflow-hidden flex items-center justify-center px-6 transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}>
      <img
        src={botanical}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--ivory)_75%)]" />

      <section className="relative z-10 w-full max-w-md text-center animate-reveal">
        <div className="mb-6 flex items-center justify-center gap-3 text-sage">
          <span className="h-px w-12 bg-sage/40" />
          <span className="text-xs uppercase tracking-[0.4em]">16 · 06 · 2027</span>
          <span className="h-px w-12 bg-sage/40" />
        </div>

        <h1 className="font-display text-5xl sm:text-6xl text-sage-deep leading-tight">
          Catherine
          <span className="font-script block text-6xl sm:text-7xl text-sage my-1 animate-shimmer">&</span>
          Luke
        </h1>

        <p className="mt-6 text-sm text-muted-foreground max-w-xs mx-auto">
          You're invited to something special. Please enter the secret word to open your invitation.
        </p>

        <div className="mt-10">
          <button
            onClick={() => {
              setFading(true);
              setTimeout(() => {
                navigate({ to: "/invitation" });
              }, 450);
            }}
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-sage px-10 py-3 text-sm uppercase tracking-[0.3em] text-ivory transition hover:bg-sage-deep shadow-[var(--shadow-soft)]"
          >
            Open Invitation
          </button>
        </div>

        <p className="mt-8 text-xs text-muted-foreground/70 italic">
          Tap to open your invitation.
        </p>
      </section>

      <style>{`
        @keyframes wiggle {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        /* Use animation: fadeIn 0.6s ease both on invitation page container */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
