import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ArchiveHero from "@/components/archive/ArchiveHero";
import Archives from "@/components/archive/Archives";
import Head from "next/head";

import useSWR from "swr";
import * as contentful from "contentful";

const fetcher = async (url: string) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,

    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const data = await client.getEntries({
    content_type: "archieve",
  });

  return data.items.map((entry) => {
    const fields = entry.fields as any;

    return {
      id: entry.sys.id,
      title: fields.title,
      description: fields.description,
      date: fields.date,
      initiator: fields.initiator.map((member: any) => member.fields),
      pictures: fields.pictures.map((picture: any) => picture.fields),
      thumbnail: fields.thumbnail.fields,
    };
  });
};

const ArchivePage = () => {
  const { data, error, isLoading } = useSWR("/api/archive", fetcher);

  return (
    <>
      <Head>
        <title>Archive - ANDAL 2023</title>
      </Head>
      <Navbar />
      <ArchiveHero />
      {error && <div>error</div>}
      {isLoading && <div>loading</div>}
      {data && <Archives archives={data} />}
      <Footer />
    </>
  );
};

export default ArchivePage;
