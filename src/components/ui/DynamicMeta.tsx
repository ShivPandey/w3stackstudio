"use client";

import Head from "next/head";

type MetaProps = {
  title: string;
  description: string;
  keywords: string;
};

const DynamicMeta = ({ title, description, keywords }: MetaProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
    </>
  );
};

export default DynamicMeta;
