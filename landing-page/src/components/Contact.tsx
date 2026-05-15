"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get in <span className="gradient-text">touch</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">Have a question about bus passes? Reach out to the MRDU transport team.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
                  <input id="contact-name" type="text" required placeholder="Your full name" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                  <input id="contact-email" type="email" required placeholder="your@email.com" className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                  <textarea id="contact-message" required rows={4} placeholder="Your message..." className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none" />
                </div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", lines: ["Maisammaguda, Dhulapally, Kompally", "Medchal, Hyderabad", "Telangana 500055, India"] },
              { icon: Phone, title: "Phone", lines: ["Mr. Bhupender Singh: 7989620416", "Mr. S Prasad Garu: 9393007192"] },
              { icon: Mail, title: "Email", lines: ["transport@mrdu.ac.in"] },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-foreground">{info.title}</h4>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
