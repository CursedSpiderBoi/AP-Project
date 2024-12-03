/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com', 
                port: '', // Leave empty for default ports
                pathname: '/**', // Match all paths
            },
        ],
    },
};

export default nextConfig;
