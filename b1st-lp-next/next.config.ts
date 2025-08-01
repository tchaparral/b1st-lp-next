import { withContentlayer } from "next-contentlayer";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Se tiver configurações específicas, pode adicioná-las aqui
};

export default withContentlayer(nextConfig);
