import Footer from "./components/block/footer";
import Header from "./components/block/header";
import UniversityHero from "./components/sections/university-hero";
import UniversityStats from "./components/sections/university-stats";
import CoreValues from "./components/sections/core-values";
import VideoIntroduction from "./components/sections/video-introduction";
import UniversityLeadership from "./components/sections/university-leadership";
import NewsSection from "./components/sections/news-section";
import PartnerLogos from "./components/sections/partner-logos";
import { Toaster } from "./components/ui/sonner";
import HeaderSpacer from "./components/ui/header-spacer";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <HeaderSpacer />
      <UniversityHero />
      <UniversityStats />
      <CoreValues />
      <VideoIntroduction />
      <UniversityLeadership />
      <PartnerLogos />
      <NewsSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
