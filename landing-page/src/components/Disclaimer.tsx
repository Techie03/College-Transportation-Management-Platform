"use client";

import { AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Disclaimer() {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-amber-500/30 bg-card p-6 shadow-2xl animate-fade-in-up">
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <AlertTriangle className="h-7 w-7" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-foreground">Educational Project</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            This project is made for <span className="font-bold text-foreground">educational purposes only</span> and is not for real use. It is a demonstration of a bus pass management system.
          </p>
          <div className="w-full rounded-xl bg-muted/50 p-4 border border-border">
            <p className="text-xs font-medium text-muted-foreground mb-1">For project interest, please contact:</p>
            <a href="mailto:nishithmareddy@gmail.com" className="font-semibold text-primary hover:underline">
              nishithmareddy@gmail.com
            </a>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="mt-6 w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
