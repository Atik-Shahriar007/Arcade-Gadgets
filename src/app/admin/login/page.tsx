"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/orders");
      router.refresh();
    } else {
      setError("Incorrect password.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-slate/15 rounded-lg p-8 w-full max-w-sm"
      >
        <h1 className="font-display font-semibold text-2xl mb-6 text-center">
          Admin Login
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border border-slate/30 rounded-md px-4 py-2 font-body mb-4 focus:outline-none focus:border-amber"
        />
        {error && <p className="text-red-500 text-sm font-body mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber text-ink font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Checking..." : "Log In"}
        </button>
      </form>
    </main>
  );
}