import { useState } from "react";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Venues", href: "#venues" },
  { label: "Vendors", href: "#vendors" },
  { label: "Photos", href: "#photos" },
  { label: "Real Weddings", href: "#real-weddings" },
  { label: "Blog", href: "#blog" },
  { label: "E-Invites", href: "#e-invites" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary-foreground">
            BestEvent
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground">
                More
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Wedding Ideas</DropdownMenuItem>
              <DropdownMenuItem>Checklist</DropdownMenuItem>
              <DropdownMenuItem>Budget Tool</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="hidden border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:inline-flex"
          >
            <User className="mr-2 h-4 w-4" />
            Login / Register
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary-foreground/10 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <div className="container py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-sm font-medium text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="mt-4 w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <User className="mr-2 h-4 w-4" />
              Login / Register
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
