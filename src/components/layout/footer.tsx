import Link from "next/link";
import { Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { NAV_LINKS } from "@/config/navigation";
import { SERVICES } from "@/constants/services";

export function Footer() {
  return (
    <footer className="bg-secondary border-t py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold font-headline">Nexlify</span>
              <span className="w-2 h-2 rounded-full bg-accent-blue" />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              {SITE_CONFIG.tagline} Building software since 2020.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 rounded-full bg-background border hover:border-accent-blue hover:text-accent-blue transition-all">
                <Github size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-background border hover:border-accent-blue hover:text-accent-blue transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-background border hover:border-accent-blue hover:text-accent-blue transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href="/services" className="text-muted-foreground hover:text-accent-blue transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">Blog (Coming soon)</span>
              </li>
              <li>
                <span className="text-muted-foreground/50 cursor-not-allowed">Careers (Coming soon)</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-sm tracking-wider uppercase">Contact</h4>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground hover:text-accent-blue">{SITE_CONFIG.email}</a>
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-muted-foreground uppercase">Response Time</span>
                <p className="text-sm font-medium">{SITE_CONFIG.responseTime}</p>
              </div>
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all text-sm"
              >
                <MessageSquare size={16} />
                Message us on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© 2025 {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
