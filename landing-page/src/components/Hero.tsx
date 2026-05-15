"use client";

import { ArrowRight, Search, Bus } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
          <Bus className="h-4 w-4" />
          <span>MRDU Transport Services — Online Bus Pass Portal</span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Your College{" "}
          <span className="gradient-text animate-gradient">Bus Pass</span>
          {" "}Made Simple
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Register online, make payments, and get your unique bus pass number instantly. 
          View and download your pass anytime from the MRDU Bus Pass portal.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="/apply" id="hero-cta-primary" className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30">
            Apply for Bus Pass
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="/view-pass" id="hero-cta-secondary" className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-all hover:scale-[1.03] hover:border-primary/40 hover:shadow-lg">
            <Search className="h-4 w-4 text-primary" />
            View My Pass
          </a>
        </div>

        {/* Stats preview */}
        <div className="animate-fade-in-up delay-400 mt-16 grid grid-cols-3 gap-8 rounded-2xl border border-border bg-card/50 glass p-8">
          {[
            { value: "30+", label: "Bus Routes" },
            { value: "500+", label: "Students Served" },
            { value: "24/7", label: "Online Access" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold gradient-text lg:text-4xl">{stat.value}</div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
