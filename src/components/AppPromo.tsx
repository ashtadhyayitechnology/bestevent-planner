import { Lightbulb, Heart, ClipboardCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lightbulb,
    title: "Save Wedding Ideas",
  },
  {
    icon: Heart,
    title: "Shortlist Vendors",
  },
  {
    icon: ClipboardCheck,
    title: "Get Free Checklist",
  },
];

export function AppPromo() {
  return (
    <section className="bg-gradient-primary py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Download The BestEvent App Today!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
            Plan your perfect wedding on the go with our mobile app
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-3 text-primary-foreground"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <feature.icon className="h-6 w-6" />
                </div>
                <span className="font-medium">{feature.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Download className="h-5 w-5" />
              Download App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
