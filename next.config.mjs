/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keeps `next build` from failing on lint nits during MVP scaffolding.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
