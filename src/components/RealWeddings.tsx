import { ArrowRight, Calendar } from "lucide-react";
import weddingStory1 from "@/assets/wedding-story-1.jpg";
import weddingStory2 from "@/assets/wedding-story-2.jpg";
import weddingStory3 from "@/assets/wedding-story-3.jpg";

const weddings = [
  {
    couple: "Priya & Arjun",
    title: "A Magical Beach Wedding With Stunning Sunset Views!",
    date: "30 November 2024",
    image: weddingStory1,
  },
  {
    couple: "Maya & Rohan",
    title: "Gorgeous Thailand Villa Wedding Full of Color & Joy!",
    date: "15 January 2025",
    image: weddingStory2,
  },
  {
    couple: "Nisha & Karan",
    title: "Enchanting Resort Wedding With Dazzling Fairy Lights!",
    date: "08 February 2025",
    image: weddingStory3,
  },
];

export function RealWeddings() {
  return (
    <section className="py-16" id="real-weddings">
      <div className="container">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Real Wedding Stories
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get inspired by real couples who celebrated in Thailand
            </p>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 text-sm font-medium text-primary transition-colors hover:underline md:flex"
          >
            View All Stories
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {weddings.map((wedding, index) => (
            <a
              key={wedding.couple}
              href="#"
              className="group overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={wedding.image}
                  alt={wedding.couple}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {wedding.couple}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {wedding.title}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {wedding.date}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Stories
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
