"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "How do I apply for a bus pass?", a: "Visit the admin office or contact the transport department at transport@mrdu.ac.in. Your details will be entered into the system and a unique Bus Pass Number will be generated. You can then view your pass online anytime." },
  { q: "How do I view my bus pass?", a: "Go to the View Pass page and enter your unique Bus Pass Number. You'll see all your pass details including route, validity dates, cost, and your profile information." },
  { q: "What documents do I need?", a: "You need your Student ID Card (or other valid identity), contact number, email, and a passport-size photo. Your identity type and card number will be recorded." },
  { q: "How many routes are available?", a: "MRDU operates 34 bus routes covering all major areas of Hyderabad including Kukatpally, BHEL, Secunderabad, Alwal, Ameerpet, Gachibowli, HiTech City, and many more." },
  { q: "Can I print my bus pass?", a: "Yes! After viewing your pass details online, you can click the Print button to generate a printable version of your bus pass." },
  { q: "Who do I contact for transport issues?", a: "Contact the MRDU Transport Department at transport@mrdu.ac.in. For project inquiries about this system, email nishithmareddy@gmail.com." },
  { q: "Is this a real bus pass system?", a: "No. This project is made for educational purposes only and is not intended for real use. It demonstrates a full-stack bus pass management system built with HTML, CSS, JavaScript, PHP, and MySQL." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30">
              <button id={`faq-toggle-${i}`} onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                <span className="pr-4 text-sm font-semibold text-card-foreground">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                <p className="px-6 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
