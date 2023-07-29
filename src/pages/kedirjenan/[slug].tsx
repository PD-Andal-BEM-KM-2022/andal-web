import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Anggota from "@/components/kedirjenan/Anggota";
import KedirjenanHero from "@/components/kedirjenan/KedirjenanHero";
import Head from "next/head";
import { useRouter } from "next/router";

import useSWR from "swr";

const fetcher = async (url: string) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,

    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const data = await client.getEntries({
    content_type: "kedirjenan",
  });

  return data.items.map((entry) => {
    const fields = entry.fields as any;

    return {
      id: entry.sys.id,
      title: fields.name,
      description: fields.description,
      slug: fields.slug,
    };
  });
};

const KedirjenanPage = (props: any) => {
  const { data, error } = useSWR("/api/kedirjenan-list", fetcher);
  // const router = useRouter();
  // const kedirjenan = router.query.kedirjenan;

  // const kedirjenans = [
  //   {
  //     id: 0,
  //     title: "Humas",
  //     desc: "Kedirjenan ini memiliki fokus pada pengembangan website dan produk digital lainnya. Produk Digital memiliki fungsi pembuatan, pengembangan, dan juga pemeliharaan website yang menjadi fungsi utama dari Produk Digital. Website Andal, Software House Andalin, dan berbagai website kementrian BEM KM UGM merupakan hasil progam kerja dari Produk Digital.",
  //     members: [
  //       {
  //         name: "Member 1 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 1 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 1 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Humas",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     title: "Media",
  //     desc: "Fungsi utama dari Media pada Kementrian ANDAL ialah membuat, mengolah, serta menghasilkan segala produk visual desain dan juga berfungsi sebagai dokumentalis atau bagian yang mendokumentasi kegiatan Andal dalam bentuk foto maupun video. Segala bentuk desain baik dari website maupun media sosial merupakan produk yang dihasilkan oleh Media.",
  //     members: [
  //       {
  //         name: "Member 1 Media",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Media",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Media",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Personalia",
  //     desc: "Memiliki fungsi yang berbeda dengan kedirjenan lainnya. Kedirjenan Personalia berfokus untuk menjamin kesejahteraan para anggota dan menciptakan ekosistem lingkungan kerja yang sehat. Didasarkan pada fungsinya untuk mengayomi seluruh anggota dan memastikan seluruh kedirjenan berjalan sesuai dengan tupoksi masing-masing, kedirjenan personalia bertugas untuk merealisasikan program kerja WALL OF FAME x Kementerian PSDM, Birthday Reminder, Pengolahan Data Anggota, serta Pengembangan Potensi Anggota.",
  //     members: [
  //       {
  //         name: "Member 1 Personalia",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Personalia",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Personalia",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Produk Digital",
  //     desc: "Kedirjenan ini memiliki fokus pada pengembangan website dan produk digital lainnya. Produk Digital memiliki fungsi pembuatan, pengembangan, dan juga pemeliharaan website yang menjadi fungsi utama dari Produk Digital. Website Andal, Software House Andalin, dan berbagai website kementrian BEM KM UGM merupakan hasil progam kerja dari Produk Digital.",
  //     members: [
  //       {
  //         name: "Member 1 Produk Digital",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Produk Digital",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Produk Digital",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 4 Produk Digital",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 5 Produk Digital",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Riset Data",
  //     desc: "Berfokus pada riset data yang akan terbagi dalam data analyst dan copywriter, kedirjenan ini akan memfasilitasi proses pengelolaan dan analisis data pada BEM KM UGM untuk mendukung pengambilan keputusan berbasis data. Kedirjenan Riset Data juga memiliki program unggulan GamaData serta turut serta dalam pengawalan isu di lingkup BEM KM UGM dan menerima adanya permintaan pengelolaan maupun analisis data dari Kementerian lain di BEM KM UGM.",
  //     members: [
  //       {
  //         name: "Member 1 Riset Data",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Riset Data",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Riset Data",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Riset Spasial",
  //     desc: "Sesuai dengan penamaannya, kedirjenan ini berfokus pada riset dan kajian isu strategis berbasis spasial seperti pemetaan sehingga terbagi atas riset serta kajian dan mapper. Kedirjenan Riset Spasial memiliki program unggulan berupa GAMASPACE dengan output berupa postingan di Instagram selama satu bulan sekali yang sesuai dengan topik bulanan serta adanya kolaborasi dengan institusi atau NGO yang berkaitan dengan pemetaan dan isu strategis.",
  //     members: [
  //       {
  //         name: "Member 1 Riset Spasial",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 2 Riset Spasial",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //       {
  //         name: "Member 3 Riset Spasial",
  //         image: "lead.png",
  //         prodi: "Ilmu Komputer 2023",
  //       },
  //     ],
  //   },
  // ];

  // const data = kedirjenans.find((data) => {
  //   return kedirjenan == data.title.replace(/\s/g, "").toLowerCase();
  // });

  const title = props.title.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) =>
    letter.toUpperCase()
  );
  return (
    <>
      <Head>
        <title>{title} | Andal 2023</title>
      </Head>
      <Navbar />
      {data && (
        <KedirjenanHero
          data={data}
          kedirjenan={{
            title: props.title,
            desc: props.description,
            slug: props.slug,
          }}
        />
      )}
      <Anggota data={props} />
      <Footer />
    </>
  );
};

export default KedirjenanPage;

import * as contentful from "contentful";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;

  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,

    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const data = await client.getEntries({
    content_type: "kedirjenan",
    "fields.slug": slug,
  });

  if (data.total == 0) {
    return {
      notFound: true,
    };
  }

  const fields = data["items"][0].fields as any;

  return {
    props: {
      title: fields.name,
      slug: fields.slug,
      description: fields.description,
      members: fields.members?.map((member: any) => {
        let memberdata = member.fields;

        memberdata.picture = memberdata.picture.fields;

        return memberdata;
      }),
    },
  };
};
