import { Helmet } from "react-helmet-async";

const SITE_URL = "https://justfaizalam.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/Images/dp.png`;

function SEO({
  title = "Faiz Alam — Software Engineer, Creator & Builder",
  description = "Explore Faiz Alam's portfolio, software projects, videos, and work in web development and digital content creation.",
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) {
  const canonicalUrl = new URL(path, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Faiz Alam" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
}

export default SEO;