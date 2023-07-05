import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Archive from "@/components/home/Archive";
import Lead from "@/components/home/Lead";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Archive />
      <Lead />
      <Footer />
    </>
  );
}
