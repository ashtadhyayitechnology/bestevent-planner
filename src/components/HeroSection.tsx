import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-thailand-wedding.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="animate-fade-in mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
          Plan a Thailand Wedding
        </h1>
        <p className="animate-fade-in mb-8 max-w-2xl text-lg text-primary-foreground/90 opacity-0 [animation-delay:200ms]">
          Discover the best venues, vendors, and wedding inspiration for your dream destination wedding
        </p>

        {/* Search Bar */}
        <div className="animate-fade-in-up w-full max-w-3xl rounded-lg bg-card p-4 opacity-0 shadow-elevated [animation-delay:400ms] md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-md border border-input bg-background px-4 py-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <Select defaultValue="thailand">
                <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="phuket">Phuket</SelectItem>
                  <SelectItem value="bangkok">Bangkok</SelectItem>
                  <SelectItem value="koh-samui">Koh Samui</SelectItem>
                  <SelectItem value="chiang-mai">Chiang Mai</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-1 items-center gap-3 rounded-md border border-input bg-background px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Select>
                <SelectTrigger className="border-0 bg-transparent p-0 shadow-none focus:ring-0">
                  <SelectValue placeholder="Find Vendors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="venues">Wedding Venues</SelectItem>
                  <SelectItem value="photographers">Photographers</SelectItem>
                  <SelectItem value="makeup">Makeup Artists</SelectItem>
                  <SelectItem value="decor">Decorators</SelectItem>
                  <SelectItem value="catering">Catering</SelectItem>
                  <SelectItem value="planners">Wedding Planners</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elevated hover:opacity-90">
              <Search className="mr-2 h-4 w-4" />
              Find Vendors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
