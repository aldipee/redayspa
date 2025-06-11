export default function RobotsTxt() {
  return null;
}

export async function getServerSideProps({ res }) {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /treatment-menu
Allow: /faq
Allow: /get-me-pampered

# Sitemap location
Sitemap: https://remassagestudio.com/sitemap.xml

# Crawl delay (optional - helps prevent server overload)
Crawl-delay: 1
`;

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
}
