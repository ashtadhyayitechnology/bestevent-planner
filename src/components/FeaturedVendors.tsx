import { Star, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import venueHotel from "@/assets/venue-hotel.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueResort from "@/assets/venue-resort.jpg";

const vendors = [
  {
    name: "Royal Events Thailand",
    category: "Wedding Planners",
    rating: 5.0,
    price: "₹7,00,000",
    image: venueHotel,
    featured: true,
  },
  {
    name: "Tropical Celebrations",
    category: "Wedding Planners",
    rating: 4.8,
    price: "₹5,50,000",
    image: venueGarden,
    featured: true,
  },
  {
    name: "Paradise Weddings",
    category: "Decorators",
    rating: 4.9,
    price: "₹3,00,000",
    image: venueResort,
    featured: false,
  },
];

export function FeaturedVendors() {
  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Featured Vendors
            </h2>
            <p className="mt-2 text-muted-foreground">
              Top-rated wedding professionals in Thailand
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline md:flex"
          >
            View All Vendors
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor, index) => (
            <a
              key={vendor.name}
              href="#"
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {vendor.featured && (
                  <Badge className="absolute left-3 top-3 bg-gradient-primary">
                    Featured
                  </Badge>
                )}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/95 px-2 py-1 text-sm font-semibold shadow-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {vendor.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {vendor.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {vendor.category}
                </p>
                <p className="mt-3 text-sm font-medium text-primary">
                  {vendor.price} onwards
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Vendors
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
