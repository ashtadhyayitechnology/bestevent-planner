import { ArrowRight } from "lucide-react";
import venueHotel from "@/assets/venue-hotel.jpg";
import venueGarden from "@/assets/venue-garden.jpg";
import venueResort from "@/assets/venue-resort.jpg";

const venues = [
  {
    title: "5 Star Wedding Hotels",
    subtitle: "Luxury Venues",
    image: venueHotel,
  },
  {
    title: "Garden & Lawn Venues",
    subtitle: "Outdoor Spaces",
    image: venueGarden,
  },
  {
    title: "Beachfront Resorts",
    subtitle: "Tropical Paradise",
    image: venueResort,
  },
];

export function VenueSearches() {
  return (
    <section className="py-16" id="venues">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Popular Venue Searches
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find the perfect venue for your Thailand wedding
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline md:flex"
          >
            View All Venues
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue, index) => (
            <a
              key={venue.title}
              href="#"
              className="group relative overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                  {venue.subtitle}
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                  {venue.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Venues
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
