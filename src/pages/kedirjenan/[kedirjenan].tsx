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
      desc: "Kedirjenan ini memiliki fokus pada pengembangan website dan produk digital lainnya. Produk Digital memiliki fungsi pembuatan, pengembangan, dan juga pemeliharaan website yang menjadi fungsi utama dari Produk Digital. Website Andal, Software House Andalin, dan berbagai website kementrian BEM KM UGM merupakan hasil progam kerja dari Produk Digital.",
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
      desc: "Fungsi utama dari Media pada Kementrian ANDAL ialah membuat, mengolah, serta menghasilkan segala produk visual desain dan juga berfungsi sebagai dokumentalis atau bagian yang mendokumentasi kegiatan Andal dalam bentuk foto maupun video. Segala bentuk desain baik dari website maupun media sosial merupakan produk yang dihasilkan oleh Media.",
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
      desc: "Memiliki fungsi yang berbeda dengan kedirjenan lainnya. Kedirjenan Personalia berfokus untuk menjamin kesejahteraan para anggota dan menciptakan ekosistem lingkungan kerja yang sehat. Didasarkan pada fungsinya untuk mengayomi seluruh anggota dan memastikan seluruh kedirjenan berjalan sesuai dengan tupoksi masing-masing, kedirjenan personalia bertugas untuk merealisasikan program kerja WALL OF FAME x Kementerian PSDM, Birthday Reminder, Pengolahan Data Anggota, serta Pengembangan Potensi Anggota.",
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
      desc: "Kedirjenan ini memiliki fokus pada pengembangan website dan produk digital lainnya. Produk Digital memiliki fungsi pembuatan, pengembangan, dan juga pemeliharaan website yang menjadi fungsi utama dari Produk Digital. Website Andal, Software House Andalin, dan berbagai website kementrian BEM KM UGM merupakan hasil progam kerja dari Produk Digital.",
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
      desc: "Berfokus pada riset data yang akan terbagi dalam data analyst dan copywriter, kedirjenan ini akan memfasilitasi proses pengelolaan dan analisis data pada BEM KM UGM untuk mendukung pengambilan keputusan berbasis data. Kedirjenan Riset Data juga memiliki program unggulan GamaData serta turut serta dalam pengawalan isu di lingkup BEM KM UGM dan menerima adanya permintaan pengelolaan maupun analisis data dari Kementerian lain di BEM KM UGM.",
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
      desc: "Sesuai dengan penamaannya, kedirjenan ini berfokus pada riset dan kajian isu strategis berbasis spasial seperti pemetaan sehingga terbagi atas riset serta kajian dan mapper. Kedirjenan Riset Spasial memiliki program unggulan berupa GAMASPACE dengan output berupa postingan di Instagram selama satu bulan sekali yang sesuai dengan topik bulanan serta adanya kolaborasi dengan institusi atau NGO yang berkaitan dengan pemetaan dan isu strategis.",
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
      <KedirjenanHero data={kedirjenans} kedirjenan={data} />
      <Anggota kedirjenan={data} />
      <Footer />
    </>
  );
};

export default KedirjenanPage;
