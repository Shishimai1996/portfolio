// Remove the TypeScript import
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

export default nextConfig;