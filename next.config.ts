import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@/components/ui'] = path.resolve(__dirname, 'components/ui');
    return config;
  },
};

export default nextConfig;
