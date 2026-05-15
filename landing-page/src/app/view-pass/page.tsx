"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Bus, Calendar, User, CheckCircle2 } from "lucide-react";

export default function ViewPass() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 800);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 px-6 pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">View Your <span className="gradient-text">Bus Pass</span></h1>
            <p className="mt-4 text-muted-foreground">Enter your Roll Number and Name to view your current bus pass details.</p>
          </div>

          {!searched ? (
            <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
              <form onSubmit={handleSearch} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Roll Number</label>
                  <input type="text" required value={rollNo} onChange={(e) => setRollNo(e.target.value)} placeholder="e.g. 21X41A0501" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 uppercase" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100">
                  {loading ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" /> : <><Search className="h-4 w-4" /> Search Pass</>}
                </button>
              </form>
            </div>
          ) : (
            <div className="animate-fade-in-up mx-auto max-w-2xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground sm:p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                      <Bus className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">MRDU Bus Pass</h2>
                      <p className="text-sm text-primary-foreground/80">Valid for Academic Year 2026-27</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">Active</div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-8 flex flex-col items-center border-b border-border pb-8 sm:flex-row sm:items-start sm:gap-6">
                  <div className="mb-4 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-muted sm:mb-0">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-foreground">{name || "Student Name"}</h3>
                    <p className="text-lg text-muted-foreground uppercase">{rollNo || "ROLL NO"}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="h-4 w-4" /> Payment Verified
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Route Details</p>
                    <p className="mt-1 text-lg font-medium text-foreground">Route 1346</p>
                    <p className="text-sm text-muted-foreground">KUKATPALLY to MRDU</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Validity</p>
                    <div className="mt-1 flex items-center gap-2 text-foreground">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Aug 2026 - May 2027</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Amount Paid</p>
                    <p className="mt-1 text-lg font-medium text-foreground">₹35,000</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Pass Number</p>
                    <p className="mt-1 font-mono text-lg font-medium text-foreground">MRDU-BP-{Math.floor(Math.random() * 90000) + 10000}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex justify-center gap-4">
                    <button onClick={() => setSearched(false)} className="rounded-xl border border-border bg-transparent px-6 py-2 text-sm font-medium hover:bg-muted transition-colors">Search Another</button>
                    <button onClick={() => window.print()} className="rounded-xl bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">Print Pass</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
