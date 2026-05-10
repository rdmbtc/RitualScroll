/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // wagmi/connectors includes optional connectors that depend on packages
    // not used by this app. Alias them out so production builds succeed.
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "porto/internal": false,
      accounts: false,
    };
    return config;
  },
};

export default nextConfig;

