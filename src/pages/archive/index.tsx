import AboutHero from "@/components/about/AboutHero";
import Archives from "@/components/archive/Archives";

export const archives = [
  {
    id: 1,
    title:
      "Kunjungan Kementrian Riset dan Data BEM UNS ke Kementrian Analisis Data dan Produk Digital BEM KM UGM",
    author: "Kedirjenan Blabla",
    date: "May 17, 2023",
    photos: ["post1-1.png", "post1-1.png"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
  {
    id: 2,
    title: "2 You are a restaurant owner looking to grow your business",
    author: "2 Kedirjenan Blabla",
    date: "2 May 17, 2023",
    photos: ["hero.png", "hero.png"],
    content:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  },
];

const ArchivePage = () => {
  return (
    <>
      <AboutHero archive />
      <Archives archives={archives} />
    </>
  );
};

export default ArchivePage;
