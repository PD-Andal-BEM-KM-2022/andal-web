import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import CoreTeam from "@/components/about/CoreTeam";
import Kedirjenan from "@/components/about/Kedirjenan";
import Head from "next/head";

import useSWR from "swr";
import * as contentful from "contentful";
import { useEffect } from "react";

const coreTeamFetcher = async (url: string) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,

    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
  });

  const data = await client.getEntries({
    content_type: "member",
    "fields.isCore": "yes",
  });

  return data.items.map((entry) => {
    const fields = entry.fields as any;

    const data = {
      id: entry.sys.id,
      name: fields.name,
      picture: fields.picture.fields,
      position: fields.position,
      faculty: fields.faculty,
      batch: fields.batch,
      linkedin: fields.linkedIn,
      iscore: fields.isCore,
    };

    return data;
  });
};

const About = () => {
  const coreTeamData = useSWR("/api/members-coreteam-about", coreTeamFetcher);

  return (
    <>
      <Head>
        <title>About | Andal 2023</title>
      </Head>

      <Navbar />
      <AboutHero />
      {coreTeamData.data && <CoreTeam data={coreTeamData.data} />}
      <Kedirjenan />
      <Footer />
    </>
  );
};

export default About;
