import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import CoreTeam from "@/components/about/CoreTeam";
import Kedirjenan from "@/components/about/Kedirjenan";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Andal 2023</title>
      </Head>

      <Navbar />
      <AboutHero />
      <CoreTeam />
      <Kedirjenan />
      <Footer />
    </>
  );
};

export default About;
