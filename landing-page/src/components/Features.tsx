"use client";

import { CreditCard, Search, Shield, Clock, MapPin, Users, type LucideIcon } from "lucide-react";

interface Feature { icon: LucideIcon; title: string; description: string; color: string; glowColor: string; }

const FEATURES: Feature[] = [
  { icon: CreditCard, title: "Online Registration & Payment", description: "Register for your bus pass online with seamless payment integration. No more standing in queues — apply from anywhere.", color: "text-blue-500 dark:text-blue-400", glowColor: "group-hover:shadow-blue-500/10" },
  { icon: Search, title: "Unique Pass Number Lookup", description: "Each student receives a unique Bus Pass Number. Search and view your pass details instantly by entering your pass number.", color: "text-cyan-500 dark:text-cyan-400", glowColor: "group-hover:shadow-cyan-500/10" },
  { icon: Shield, title: "Secure Admin Dashboard", description: "Administrators can manage all passes, view reports, track today's and weekly pass activity through a secure admin panel.", color: "text-emerald-500 dark:text-emerald-400", glowColor: "group-hover:shadow-emerald-500/10" },
  { icon: Clock, title: "Validity & Date Tracking", description: "Pass validity is tracked automatically with from/to dates. Get notified when your pass is about to expire.", color: "text-amber-500 dark:text-amber-400", glowColor: "group-hover:shadow-amber-500/10" },
  { icon: MapPin, title: "30+ Route Categories", description: "Choose from over 30 route categories connecting major city locations like Kukatpally, BHEL, Secunderabad, Alwal, and more to the MRDU campus.", color: "text-violet-500 dark:text-violet-400", glowColor: "group-hover:shadow-violet-500/10" },
  { icon: Users, title: "Student Identity Verification", description: "Integrated identity card verification system — upload your student card for instant validation and pass generation.", color: "text-rose-500 dark:text-rose-400", glowColor: "group-hover:shadow-rose-500/10" },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Features</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Everything for your <span className="gradient-text">bus pass</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">A complete digital system for MRDU students to manage their bus transport — register, pay, and access passes online.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl ${f.glowColor}`} style={{ animationDelay: `${i * 100}ms` }}>
                <div className="pointer-events-none absolute -right-px -top-px h-24 w-24 rounded-tr-2xl bg-gradient-to-bl from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-feature-glow ${f.color} transition-transform duration-500 group-hover:scale-110`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
                <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
