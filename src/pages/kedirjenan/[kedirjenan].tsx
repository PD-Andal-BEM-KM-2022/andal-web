import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Anggota from "@/components/kedirjenan/Anggota";
import KedirjenanHero from "@/components/kedirjenan/KedirjenanHero";
import Head from "next/head";
import { useRouter } from "next/router";

const KedirjenanPage = () => {
  const router = useRouter();
  const kedirjenan = router.query.kedirjenan;

  const kedirjenans = [
    {
      id: 0,
      title: "Humas",
      desc: "Humas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Humas",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Humas",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Humas",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
    {
      id: 1,
      title: "Media",
      desc: "Media Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Media",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Media",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Media",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
    {
      id: 2,
      title: "Personalia",
      desc: "Personalia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Personalia",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Personalia",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Personalia",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
    {
      id: 3,
      title: "Produk Digital",
      desc: "Produk digital Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Produk Digital",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Produk Digital",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Produk Digital",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 4 Produk Digital",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 5 Produk Digital",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
    {
      id: 4,
      title: "Riset Data",
      desc: "Riset Data Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Riset Data",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Riset Data",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Riset Data",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
    {
      id: 5,
      title: "Riset Spasial",
      desc: "Riset Spasial Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.  risus sem sollicitudin lacus.",
      members: [
        {
          name: "Member 1 Riset Spasial",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 2 Riset Spasial",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
        {
          name: "Member 3 Riset Spasial",
          image: "lead.png",
          prodi: "Ilmu Komputer 2023",
        },
      ],
    },
  ];

  const data = kedirjenans.find((data) => {
    return kedirjenan == data.title.replace(/\s/g, "").toLowerCase();
  });

  return (
    <>
      <Head>
        <title>{data?.title} | Andal 2023</title>
      </Head>
      <Navbar />
      <KedirjenanHero kedirjenan={data} />
      <Anggota kedirjenan={data} />
      <Footer />
    </>
  );
};

export default KedirjenanPage;
