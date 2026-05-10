"use client";

import { useMemo, useState } from "react";

// Lightweight DebugPanel so imports don't break builds.
// (The original project referenced this file but it wasn't present.)
export function DebugPanel(props: {
  promptId: string;
  hasAccess: boolean;
  isConfirmed: boolean;
  isPurchasing: boolean;
  isConfirming: boolean;
  contractAddress?: string;
}) {
  const [open, setOpen] = useState(false);

  const rows = useMemo(
    () => [
      ["promptId", props.promptId],
      ["hasAccess", String(props.hasAccess)],
      ["isConfirmed", String(props.isConfirmed)],
      ["isPurchasing", String(props.isPurchasing)],
      ["isConfirming", String(props.isConfirming)],
      ["contract", props.contractAddress || "(not set)"],
    ],
    [props],
  );

  return (
    <div className="fixed bottom-3 right-3 z-[70] hidden lg:block">
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-xs text-white/70 hover:text-white hover:bg-black/70 backdrop-blur"
      >
        Debug
      </button>
      {open && (
        <div className="mt-2 w-[340px] rounded-xl bg-black/80 border border-white/10 backdrop-blur p-3 text-xs text-white/70">
          <div className="font-medium text-white/90 mb-2">DebugPanel</div>
          <div className="space-y-1">
            {rows.map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-3">
                <span className="text-white/45">{k}</span>
                <span className="text-right break-all">{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

