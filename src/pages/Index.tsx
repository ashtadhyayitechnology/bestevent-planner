import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VenueSearches } from "@/components/VenueSearches";
import { VendorCategories } from "@/components/VendorCategories";
import { RealWeddings } from "@/components/RealWeddings";
import { FeaturedVendors } from "@/components/FeaturedVendors";
import { AppPromo } from "@/components/AppPromo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VenueSearches />
        <VendorCategories />
        <RealWeddings />
        <FeaturedVendors />
        <AppPromo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
