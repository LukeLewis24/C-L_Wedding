import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import botanical from "@/assets/botanical-bg.jpg";

export const Route = createFileRoute("/")({
  component: GatePage,
});

const PASSWORD = "2027";

function GatePage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const unlocked = sessionStorage.getItem("cl-unlocked") === "1";

    console.log("Gate page effect. unlocked =", unlocked);

    if (unlocked) {
      console.log("Already unlocked, navigating to invitation");
      navigate({ to: "/invitation" });
    }
  }, [navigate]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim() === PASSWORD) {
      console.log("PASSWORD CORRECT");

      sessionStorage.setItem("cl-unlocked", "1");

      console.log(
        "sessionStorage value:",
        sessionStorage.getItem("cl-unlocked")
      );

      console.log("NAVIGATING TO INVITATION");

      navigate({ to: "/invitation" });
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
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

        <form
          onSubmit={onSubmit}
          className={`mt-10 ${shake ? "animate-[petal-fall_0s] motion-safe:[animation:wiggle_.4s_ease]" : ""}`}
          style={shake ? { animation: "wiggle .4s ease" } : undefined}
        >
          <div className="group relative rounded-2xl bg-card/80 backdrop-blur-sm p-1.5 border border-sage/20 shadow-[var(--shadow-petal)]">
            <div className="flex items-center gap-2 rounded-xl bg-ivory/70 px-5 py-4">
              <svg className="h-5 w-5 text-sage/70 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 1 1 8 0v3" />
              </svg>
              <input
                autoFocus
                type="text"
                inputMode="text"
                autoComplete="off"
                value={value}
                onChange={(e) => { setValue(e.target.value); setError(false); }}
                placeholder="Secret word"
                aria-label="Secret word"
                className="w-full bg-transparent text-center font-display text-2xl tracking-[0.3em] text-sage-deep placeholder:text-sage/30 placeholder:tracking-normal placeholder:font-sans placeholder:text-base outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sage px-10 py-3 text-sm uppercase tracking-[0.3em] text-ivory transition hover:bg-sage-deep shadow-[var(--shadow-soft)]"
          >
            Open
          </button>

          <p className={`mt-4 h-5 text-sm text-destructive transition-opacity ${error ? "opacity-100" : "opacity-0"}`}>
            Not quite — try again.
          </p>
        </form>

        <p className="mt-8 text-xs text-muted-foreground/70 italic">
          Hint: the year we say "I do".
        </p>
      </section>

      <style>{`
        @keyframes wiggle {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </main>
  );
}
