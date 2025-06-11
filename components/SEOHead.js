import Head from "next/head";
import StructuredData from "./seo/StructuredData";

export default function SEOHead({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogType = "website",
  ogUrl,
  ogImage,
  ogDescription,
  ogSiteName = "Re Massage Studio",
  canonicalUrl,
  noindex = false,
  nofollow = false,
  ...props
}) {
  const robots = `${noindex ? "noindex" : "index"},${
    nofollow ? "nofollow" : "follow"
  }`;

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || "Re Massage Studio"} />
      <meta name="robots" content={robots} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO meta tags */}
      <meta name="geo.region" content="ID-BA" />
      <meta name="geo.placename" content="Seminyak, Bali" />
      <meta name="geo.position" content="-8.676446;115.153198" />
      <meta name="ICBM" content="-8.676446, 115.153198" />

      {props.structuredDataType && (
        <StructuredData type={props.structuredDataType} />
      )}

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      {/* Stylesheets */}
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/swiper.min.css" />
      <link rel="stylesheet" href="/css/aos.css" />
      <link rel="stylesheet" href="/css/main.css" />
    </Head>
  );
}
