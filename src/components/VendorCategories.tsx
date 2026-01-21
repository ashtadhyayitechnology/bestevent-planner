import categoryBridal from "@/assets/category-bridal.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";
import categoryPhotography from "@/assets/category-photography.jpg";

const categories = [
  {
    title: "Bridal Wear",
    subtitle: "in Thailand",
    image: categoryBridal,
  },
  {
    title: "Makeup Artists",
    subtitle: "in Thailand",
    image: categoryMakeup,
  },
  {
    title: "Photographers",
    subtitle: "in Thailand",
    image: categoryPhotography,
  },
];

export function VendorCategories() {
  return (
    <section className="bg-muted py-16" id="vendors">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Popular Searches
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore top vendor categories for your wedding
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <a
              key={category.title}
              href="#"
              className="group relative overflow-hidden rounded-xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="hero-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="font-serif text-2xl font-semibold text-primary-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  {category.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
