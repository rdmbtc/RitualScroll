"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ritualwebhub:onboarding:v1";

type Step = {
  title: string;
  body: React.ReactNode;
};

export function shouldAutoOpenOnboarding(): boolean {
  if (typeof window === "undefined") return false;
  return !window.localStorage.getItem(STORAGE_KEY);
}

export function markOnboardingDone() {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, "1");
}

export default function OnboardingTour({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const steps: Step[] = useMemo(
    () => [
      {
        title: "Welcome to Ritual Web Hub",
        body: (
          <div className="space-y-3 text-white/75 leading-relaxed">
            <p>
              Quick walkthrough so you can start exploring prompts and previews
              immediately.
            </p>
            <p className="text-white/55 text-sm">
              Tip: You can reopen this anytime via <span className="text-white/80">Tutorial</span>.
            </p>
          </div>
        ),
      },
      {
        title: "Pick a style",
        body: (
          <div className="space-y-2 text-white/75 leading-relaxed">
            <p>
              Use the <span className="text-white/90">Styles</span> list to browse
              different aesthetics and design systems.
            </p>
            <ul className="list-disc pl-5 text-white/65 text-sm space-y-1">
              <li>On mobile, open the menu to see the full list.</li>
              <li>Each style has its own preview page you can open.</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Filter fast",
        body: (
          <div className="space-y-2 text-white/75 leading-relaxed">
            <p>
              Use <span className="text-white/90">MODE</span> and{" "}
              <span className="text-white/90">TYPE</span> filters to narrow down
              light/dark and font families.
            </p>
          </div>
        ),
      },
      {
        title: "Preview + Open",
        body: (
          <div className="space-y-2 text-white/75 leading-relaxed">
            <p>
              The preview area shows how the chosen style feels in a “live”
              layout.
            </p>
            <ul className="list-disc pl-5 text-white/65 text-sm space-y-1">
              <li>
                <span className="text-white/90">Open</span> launches the full
                preview page.
              </li>
              <li>
                <span className="text-white/90">Get Prompt</span> lets you unlock
                and copy the prompt (wallet required).
              </li>
            </ul>
          </div>
        ),
      },
    ],
    [],
  );

  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!open) setStepIndex(0);
  }, [open]);

  if (!open) return null;

  const step = steps[stepIndex];
  const isLast = stepIndex === steps.length - 1;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Onboarding tutorial"
    >
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#111111] shadow-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-white/10 bg-[#161616] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <div className="text-white font-medium">{step.title}</div>
              <div className="text-xs text-white/40">
                Step {stepIndex + 1} of {steps.length}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              markOnboardingDone();
              onClose();
            }}
            className="text-white/40 hover:text-white transition-colors p-2"
            aria-label="Close tutorial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-5">{step.body}</div>

        <div className="px-5 py-4 border-t border-white/10 bg-[#161616] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              markOnboardingDone();
              onClose();
            }}
            className="text-sm text-white/55 hover:text-white transition-colors"
          >
            Skip
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              disabled={stepIndex === 0}
              className="px-3 py-2 rounded-md border border-white/10 text-sm text-white/80 hover:bg-white/5 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              Back
            </button>
            <button
              onClick={() => {
                if (isLast) {
                  markOnboardingDone();
                  onClose();
                  return;
                }
                setStepIndex((i) => Math.min(steps.length - 1, i + 1));
              }}
              className="px-4 py-2 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 active:scale-[0.99] transition"
            >
              {isLast ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

