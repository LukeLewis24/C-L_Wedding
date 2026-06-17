import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import botanical from "@/assets/botanical-bg.jpg";

// Corner SVG
function CornerSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 120C0 53.7258 53.7258 0 120 0"
        stroke="#c1ad99"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Falling Petals Animation
function PetalFall() {
  // 8 petals, randomized start/animation
  const petals = Array.from({ length: 8 });
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const dur = 5 + Math.random() * 3;
        const size = 16 + Math.random() * 18;
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              animation: `petal-fall ${dur}s linear ${delay}s infinite`,
              top: '-10%',
            }}
          >
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              style={{
                opacity: 0.8,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="12"
                fill="#eecfc9"
                fillOpacity="0.7"
              />
            </svg>
          </span>
        );
      })}
      <style>{`
        @keyframes petal-fall {
          0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.7; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(180deg) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [mounted, setMounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const mountTimeout = setTimeout(() => setMounted(true), 300);
    const revealTimeout = setTimeout(() => setRevealed(true), 2500);
    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(revealTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#f8f5f1] overflow-hidden">
      {/* Botanical background */}
      <img
        src={botanical}
        alt=""
        className="pointer-events-none fixed inset-0 w-full h-full object-cover object-center opacity-60 z-0"
        style={{ filter: "blur(2px)" }}
        draggable={false}
      />

      {/* Corners */}
      <CornerSVG className="absolute top-0 left-0 w-24 h-24 z-10" />
      <CornerSVG className="absolute top-0 right-0 w-24 h-24 rotate-90 z-10" />
      <CornerSVG className="absolute bottom-0 left-0 w-24 h-24 -rotate-90 z-10" />
      <CornerSVG className="absolute bottom-0 right-0 w-24 h-24 rotate-180 z-10" />

      {/* Petal animation */}
      <PetalFall />

      {/* Invitation Card */}
      <main className="relative z-30 flex flex-col items-center justify-center w-full px-4 py-12 min-h-[80vh]">
        <div className="bg-white/80 shadow-xl rounded-3xl p-8 max-w-2xl w-full border border-[#d8c4b0] backdrop-blur-sm">
          <header className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#b3936c] tracking-wide mb-2">
              Claire &amp; Lucas
            </h1>
            <div className="text-[#a78a6d] font-serif text-lg md:text-xl mb-2">
              are getting married!
            </div>
            <div className="text-[#a78a6d] font-serif text-base md:text-lg">
              Saturday, September 14, 2024<br />
              <span className="tracking-wide">San Francisco, California</span>
            </div>
          </header>
          {/* PDF Preview */}
          <div className="w-full flex flex-col items-center mb-8">
            <iframe
              src="/wedding-invite.pdf"
              title="Wedding Invitation"
              className="w-full h-80 rounded-xl border border-[#e6ded2] shadow-md bg-white"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <a
              href="/wedding-invite.pdf"
              download
              className="inline-block px-6 py-2 rounded-lg bg-[#b3936c] text-white font-semibold shadow transition hover:bg-[#a78a6d]"
            >
              Download Invitation (PDF)
            </a>
            <a
              href="/wedding-invite.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-lg border border-[#b3936c] text-[#b3936c] font-semibold shadow transition hover:bg-[#b3936c] hover:text-white"
            >
              View in New Tab
            </a>
          </div>
          <div className="text-center text-[#a78a6d] text-sm mt-2">
            We can't wait to celebrate with you!
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-30 text-center text-[#b3936c] text-xs pb-6 pt-2 w-full">
        &copy; 2024 Claire &amp; Lucas &middot; Invitation designed with love
      </footer>

      {/* Fade overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#f8f5e9] transition-opacity duration-1000 ${
          revealed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
    </div>
  );
}
