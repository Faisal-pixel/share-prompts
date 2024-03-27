/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ['lh3.googleusercontent.com'], // image domains that are allowed to be displayed. This is a security feature to prevent images from untrusted sources from being displayed on the website.
    },
    webpack(config) {
        config.experiments = { 
            ...config.experiments,
            topLevelAwait: true 
        };

        return config
    }
};

export default nextConfig;
