import Head from "next/head";

const Seo: React.FC<React.HTMLAttributes<HTMLHeadElement>> = ({ ...rest }) => {
  return (
    <Head {...rest}>
      <title>Quarantine Free Travel Destinations</title>
      <meta
        name="description"
        content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Quarantine Free Travel Destinations"
      />
      <meta
        name="twitter:description"
        content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
      />
      <meta
        name="twitter:image"
        content="https://quarantinefree.info/assets/images/social/share-card.jpeg"
      />
      <meta name="twitter:site" content="@makingstuffs" />
      <meta name="twitter:creator" content="@makingstuffs" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Quarantine Free Travel Destinations" />
      <meta
        property="og:description"
        content="Check up the latest countries which might be allowing tourists to visit without an extended quarantine or isolation period."
      />
      <meta
        property="og:image"
        content="https://quarantinefree.info/assets/images/social/share-card.jpeg"
      />
      <meta property="og:url" content="https://quarantinefree.info" />
      <meta
        property="og:site_name"
        content="Quarantine Free Travel Destinations"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export { Seo };
