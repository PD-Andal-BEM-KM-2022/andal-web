import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import ArchiveHero from "@/components/archive/ArchiveHero";
import Archives from "@/components/archive/Archives";
import Head from "next/head";

export const archives = [
  {
    id: 1,
    title:
      "Kunjungan Kementrian Riset dan Data BEM UNS ke Kementrian Analisis Data dan Produk Digital BEM KM UGM",
    author: "Kedirjenan Produk Digital",
    date: "May 17, 2023",
    photos: [
      "post1-1.png",
      "post1-1.png",
      "post1-1.png",
      "post1-1.png",
      "post1-1.png",
      "post1-1.png",
    ],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 2,
    title: "2 You are a restaurant owner looking to grow your business",
    author: "Kedirjenan Riset Spasial",
    date: "2 May 17, 2023",
    photos: ["hero.png", "hero.png"],
    content:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 3,
    title: "3 You are a restaurant owner looking to grow your business",
    author: "Kedirjenan Riset Spasial",
    date: "3 May 17, 2023",
    photos: ["hero.png", "hero.png"],
    content:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 4,
    title: "4 You are a restaurant owner looking to grow your business",
    author: "Kedirjenan Media",
    date: "4 May 17, 2024",
    photos: ["hero.png", "hero.png"],
    content:
      "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
];

const ArchivePage = () => {
  return (
    <>
      <Head>
        <title>Archive - ANDAL 2023</title>
      </Head>
      <Navbar />
      <ArchiveHero />
      <Archives archives={archives} />
      <Footer />
    </>
  );
};

export default ArchivePage;
