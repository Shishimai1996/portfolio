const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/portfolio" : "", // 本番環境でのみ basePath を適用
  assetPrefix: isProduction ? "/portfolio" : "", // 本番環境でのみ assetPrefix を適用
  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/portfolio" : "",
  },
  // experimental: {
  //   appDir: true,
  // },
};

export default nextConfig;
