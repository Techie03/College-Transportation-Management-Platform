"use client";

import { MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const ROUTES = [
  { id: "1024", from: "BHEL", to: "MRDU" },
  { id: "1137", from: "ALWAL", to: "MRDU" },
  { id: "1258", from: "SECUNDERABAD", to: "MRDU" },
  { id: "1346", from: "KUKATPALLY", to: "MRDU" },
  { id: "1472", from: "AMEERPET", to: "MRDU" },
  { id: "1583", from: "DILSUKHNAGAR", to: "MRDU" },
  { id: "1691", from: "MEHDIPATNAM", to: "MRDU" },
  { id: "1705", from: "UPPAL", to: "MRDU" },
  { id: "1819", from: "LB NAGAR", to: "MRDU" },
  { id: "1932", from: "BEGUMPET", to: "MRDU" },
  { id: "2041", from: "HABSIGUDA", to: "MRDU" },
  { id: "2156", from: "MALKAJGIRI", to: "MRDU" },
  { id: "2278", from: "TARNAKA", to: "MRDU" },
  { id: "2394", from: "JUBILEE HILLS", to: "MRDU" },
  { id: "2467", from: "BANJARA HILLS", to: "MRDU" },
  { id: "2583", from: "KOTI", to: "MRDU" },
  { id: "2619", from: "CHARMINAR", to: "MRDU" },
  { id: "2748", from: "MIYAPUR", to: "MRDU" },
  { id: "2835", from: "KONDAPUR", to: "MRDU" },
  { id: "2951", from: "GACHIBOWLI", to: "MRDU" },
  { id: "3067", from: "MADHAPUR", to: "MRDU" },
  { id: "3142", from: "HITECH CITY", to: "MRDU" },
  { id: "3289", from: "NAMPALLY", to: "MRDU" },
  { id: "3371", from: "ABIDS", to: "MRDU" },
  { id: "3456", from: "MUSHEERABAD", to: "MRDU" },
  { id: "3598", from: "BOWENPALLY", to: "MRDU" },
  { id: "3614", from: "TRIMULGHERRY", to: "MRDU" },
  { id: "3782", from: "SAINIKPURI", to: "MRDU" },
  { id: "3891", from: "NAGOLE", to: "MRDU" },
  { id: "3947", from: "VANASTHALIPURAM", to: "MRDU" },
  { id: "4053", from: "SHAMSHABAD", to: "MRDU" },
  { id: "4168", from: "MEDCHAL", to: "MRDU" },
  { id: "4279", from: "KOMPALLY", to: "MRDU" },
  { id: "4385", from: "JEEDIMETLA", to: "MRDU" },
];

export default function Routes() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? ROUTES : ROUTES.slice(0, 8);

  return (
    <section id="routes" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">Routes</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">{ROUTES.length}</span> bus routes available
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">Connecting all major Hyderabad locations to the MRDU campus daily.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayed.map((r) => (
            <div key={r.id} className="group rounded-2xl border border-border bg-card p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-extrabold text-primary transition-transform duration-500 group-hover:scale-110">
                {r.id}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span className="font-medium text-foreground">{r.from}</span>
                <ArrowRight className="h-3 w-3" />
                <span className="font-medium text-foreground">{r.to}</span>
              </div>
            </div>
          ))}
        </div>

        {ROUTES.length > 8 && (
          <div className="mt-10 text-center">
            <button
              id="toggle-routes"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:scale-[1.02] hover:border-primary/40 hover:shadow-md"
            >
              {showAll ? "Show Less" : `View All ${ROUTES.length} Routes`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
