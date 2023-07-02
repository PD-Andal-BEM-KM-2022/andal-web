import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CoreTeam from "@/components/about/CoreTeam";
import Kedirjenan from "@/components/about/Kedirjenan";

const About = () => {
  return (
    <>
      <AboutHero about />
      <CoreTeam about />
      <Kedirjenan />
      <Footer />
    </>
  );
};

export default About;
