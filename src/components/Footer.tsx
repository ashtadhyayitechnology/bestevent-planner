import { Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Press", href: "#" },
  ],
  vendors: [
    { label: "Photographers", href: "#" },
    { label: "Makeup Artists", href: "#" },
    { label: "Wedding Planners", href: "#" },
    { label: "Decorators", href: "#" },
  ],
  venues: [
    { label: "Bangkok Venues", href: "#" },
    { label: "Phuket Venues", href: "#" },
    { label: "Koh Samui Venues", href: "#" },
    { label: "Chiang Mai Venues", href: "#" },
  ],
  resources: [
    { label: "Wedding Blog", href: "#" },
    { label: "Wedding Ideas", href: "#" },
    { label: "Checklist", href: "#" },
    { label: "Budget Tool", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground pt-16 text-background">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold">BestEvent</span>
            </a>
            <p className="mt-4 text-sm text-background/70">
              Your one-stop destination for planning the perfect wedding in Thailand.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Vendors
            </h4>
            <ul className="space-y-3">
              {footerLinks.vendors.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Venues
            </h4>
            <ul className="space-y-3">
              {footerLinks.venues.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 py-6 md:flex-row">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} BestEvent. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-background/60">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for dream weddings
          </p>
        </div>
      </div>
    </footer>
  );
}
