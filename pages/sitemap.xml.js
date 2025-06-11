export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://remassagestudio.com";

  const staticPages = ["", "/treatment-menu", "/faq", "/get-me-pampered"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          const priority = url === "" ? "1.0" : "0.8";
          const changefreq = url === "" ? "weekly" : "monthly";

          return `
            <url>
              <loc>${baseUrl}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
