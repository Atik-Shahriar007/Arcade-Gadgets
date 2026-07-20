"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import Link from "next/link";

interface Toast {
  id: number;
  message: string;
}

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-toast bg-amber text-ink rounded-lg px-5 py-4 flex items-center gap-4 max-w-xs shadow-[0_0_0_3px_rgba(240,162,2,0.25),0_0_25px_rgba(240,162,2,0.55),0_8px_20px_rgba(0,0,0,0.25)]"
          >
            <div className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center flex-shrink-0">
              <span className="text-ink font-bold">✓</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-semibold">{toast.message}</p>
              <Link
                href="/cart"
                className="text-ink font-body text-sm font-bold underline underline-offset-2 hover:opacity-70"
              >
                View Cart →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}