import React, { FunctionComponent, ReactNode } from "react";
import Head from "next/head";

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  author: string;
  children: ReactNode;
}

const Template: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  author,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={author} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={author} />
        <meta name="twitter:creator" content={author} />
      </Head>
      {children}
    </>
  );
};

export default Template;
