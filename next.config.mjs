// A static export: `next build` writes the whole site, one HTML file per page, to the out/ folder.
// That is what `deployer deploy` uploads. (Server features such as API routes and middleware are not available.)
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
