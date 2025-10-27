import { useHeaderSize } from "../../hooks/use-header-size";
import { HeroCarousel } from "./carousel";

const Hero = () => {
  const { headerHeight } = useHeaderSize();
  return (
    <div
      className="bg-red-400"
      style={{
        height: "100vh",
        paddingTop: `${headerHeight}px`,
      }}
    >
      <HeroCarousel />
    </div>
  );
};

export default Hero;
