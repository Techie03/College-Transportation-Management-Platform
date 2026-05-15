"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Bus } from "lucide-react";

export default function ApplyPage() {
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [passNumber, setPassNumber] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPassNumber(`MRDU-BP-${Math.floor(Math.random() * 90000) + 10000}`);
      setStep("success");
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-6 pt-32 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Apply for <span className="gradient-text">Bus Pass</span>
            </h1>
            <p className="mt-4 text-muted-foreground">Complete your registration and make a secure payment to generate your pass.</p>
          </div>

          <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xl">
            {step === "form" && (
              <div className="animate-fade-in-up">
                <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">1</div>
                  <h2 className="text-lg font-semibold">Student Details</h2>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Roll Number</label>
                    <input type="text" required placeholder="e.g. 21X41A0501" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm uppercase outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Email</label>
                      <input type="email" required placeholder="student@example.com" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium">Phone</label>
                      <input type="tel" required placeholder="9876543210" pattern="[0-9]{10}" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Select Route</label>
                    <select required className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50">
                      <option value="">Select your pickup location</option>
                      <option value="1346">1346 - KUKATPALLY</option>
                      <option value="1024">1024 - BHEL</option>
                      <option value="1258">1258 - SECUNDERABAD</option>
                      <option value="1137">1137 - ALWAL</option>
                    </select>
                  </div>
                  <button type="submit" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]">
                    Proceed to Payment <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            )}

            {step === "payment" && (
              <div className="animate-fade-in-up">
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">2</div>
                    <h2 className="text-lg font-semibold">Secure Payment</h2>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-emerald-500" />
                </div>
                
                <div className="mb-6 rounded-2xl bg-muted/50 p-6 text-center border border-border">
                  <p className="text-sm text-muted-foreground">Total Amount to Pay</p>
                  <p className="mt-1 text-4xl font-bold text-foreground">₹35,000</p>
                  <p className="mt-2 text-xs text-muted-foreground">Valid for Academic Year 2026-27</p>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input type="text" required placeholder="0000 0000 0000 0000" maxLength={19} className="w-full rounded-xl border border-border bg-muted py-3 pl-10 pr-4 text-sm font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="mb-1.5 block text-sm font-medium">Expiry</label>
                      <input type="text" required placeholder="MM/YY" maxLength={5} className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                    </div>
                    <div className="flex-1">
                      <label className="mb-1.5 block text-sm font-medium">CVV</label>
                      <input type="password" required placeholder="•••" maxLength={3} className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/50" />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                    <p className="text-xs text-amber-600 dark:text-amber-400">This is a mock payment gateway for educational purposes. No real transaction will occur.</p>
                  </div>

                  <button type="submit" disabled={loading} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70">
                    {loading ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" /> : "Pay ₹35,000 Securely"}
                  </button>
                  <button type="button" onClick={() => setStep("form")} disabled={loading} className="mt-2 w-full text-center text-sm font-medium text-muted-foreground hover:text-foreground">
                    Back to Form
                  </button>
                </form>
              </div>
            )}

            {step === "success" && (
              <div className="animate-fade-in-up flex flex-col items-center text-center py-6">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="mb-2 text-2xl font-bold">Payment Successful!</h2>
                <p className="mb-8 text-muted-foreground">Your bus pass has been generated automatically.</p>
                
                <div className="mb-8 w-full rounded-2xl border border-border bg-muted p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Pass Number</p>
                  <p className="mt-2 font-mono text-2xl font-bold text-primary">{passNumber}</p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <a href="/view-pass" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                    <Bus className="h-4 w-4" /> View My Pass
                  </a>
                  <a href="/" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted">
                    Return to Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
