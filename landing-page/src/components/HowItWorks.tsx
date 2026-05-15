"use client";

import { UserPlus, CreditCard, QrCode, Download } from "lucide-react";

const STEPS = [
  { icon: UserPlus, step: "01", title: "Register Online", description: "Fill in your details — name, student ID, contact info, identity card number, and select your bus route category." },
  { icon: CreditCard, step: "02", title: "Make Payment", description: "Pay the bus pass fee securely online. Your payment is processed and linked to your pass record instantly." },
  { icon: QrCode, step: "03", title: "Get Pass Number", description: "A unique Bus Pass Number is generated for you. This is your digital identity for MRDU transport services." },
  { icon: Download, step: "04", title: "View & Print", description: "Search your pass by number anytime on the portal. View full details and print your bus pass for daily use." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-32">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">How It Works</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get your pass in <span className="gradient-text">4 easy steps</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">From registration to printing — your bus pass is just a few clicks away.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="group relative text-center" style={{ animationDelay: `${i * 150}ms` }}>
                {i < STEPS.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-12 hidden h-px w-full bg-gradient-to-r from-border to-transparent lg:block" style={{ left: "60%" }} />
                )}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-card text-primary transition-all duration-500 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">Step {s.step}</div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
