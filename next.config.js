/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "dev.to",
      "miro.medium.com",
      "res.cloudinary.com",
      "cdn.vox-cdn.com",
      "thehackernews.com",
      "www.cnet.com",
      "ph-files.imgix.net",
      "techcrunch.com",
      "media.wired.com",
      "cdn.hackernoon.com",
      "cloud.netlifyusercontent.com",
      "wp.technologyreview.com",
      "www.xda-developers.com",
      "helios-i.mashable.com",
      "blog.openreplay.com",
      "www.freecodecamp.org",
      "img-cdn.tnwcdn.com",
      "149366088.v2.pressablecdn.com",
      "css-tricks.com",
      "images.ctfassets.net",
      "www.wired.com",
      // random avatars
      "picsum.photos",
    ],
  },
};

module.exports = nextConfig;
