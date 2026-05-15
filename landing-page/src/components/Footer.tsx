import { Bus, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Bus className="h-5 w-5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight text-foreground">MRDU BUS PASS</span>
                <span className="text-[10px] text-muted-foreground">Malla Reddy Deemed University</span>
              </div>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The official online bus pass management system for MRDU students. Register, pay, and access your bus pass digitally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Features", "Routes", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Maisammaguda, Dhulapally, Hyderabad 500055</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4 shrink-0 text-primary" />9393007192</li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="h-4 w-4 shrink-0 text-primary" />transport@mrdu.ac.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} MRDU Bus Pass System. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Built with HTML, CSS, JavaScript, PHP & MySQL</p>
        </div>
      </div>
    </footer>
  );
}
