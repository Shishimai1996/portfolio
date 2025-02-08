const isProduction = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/portfolio" : "", // 本番環境でのみ basePath を適用
  assetPrefix: isProduction ? "/portfolio" : "", // 本番環境でのみ assetPrefix を適用
  experimental: {
    appDir: true,
  },
};
