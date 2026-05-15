"use client";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            About
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            MRDU <span className="gradient-text">Transport</span> Services
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              University Buses ply exclusively for students connecting main locations in the city in addition to availability of public transit. Our transport service has been running successfully for over <span className="font-semibold text-foreground">two decades</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We have acquired a strong fleet of buses across <span className="font-semibold text-foreground">30+ routes</span>. <span className="font-semibold text-foreground">On-time service</span> and <span className="font-semibold text-foreground">reliability</span> are the core value differentiators, making it an unmatched travelling experience for our students.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              This online portal allows students to register for bus passes digitally, make payments, and view their pass details at any time — eliminating paperwork and queues.
            </p>
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400">⚠️ This is an educational demo project. Not for real use.</p>
              <p className="mt-1 text-xs text-muted-foreground">
                For project interest: <a href="mailto:nishithmareddy@gmail.com" className="font-medium text-primary underline">nishithmareddy@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "Transport Supervisor", name: "Mr. Rajesh Kumar", phone: "9876543210" },
              { title: "Transport Manager", name: "Mr. Venkat Rao", phone: "9123456789" },
            ].map((person) => (
              <div key={person.name} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{person.title}</p>
                <p className="mt-2 text-lg font-bold text-card-foreground">{person.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">Tel: {person.phone}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-secondary">Email</p>
              <p className="mt-2 text-lg font-bold text-card-foreground">transport@mrdu.ac.in</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Maisammaguda, Dhulapally, Kompally, Medchal<br />
                Hyderabad, Telangana 500055
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
