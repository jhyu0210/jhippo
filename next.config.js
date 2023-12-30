/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "localhost",
    //   "https://jhippo-joyclad.vercel.app",
    //   // "vercel.com/joyclad/jhippo/Fk5pk7MHdGQKR5pc761v4HUurUxs",
    // ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "jhippo-production.up.railway.app",
        pathname: "**",
      },
      //   // https://vercel.com/joyclad/jhippo/Fk5pk7MHdGQKR5pc761v4HUurUxs
    ],
  },
};

module.exports = nextConfig;
