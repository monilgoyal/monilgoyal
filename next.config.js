/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    images: {
        domains: ['cdn.dorik.com', 'images.weserv.nl']
    },
}


module.exports = nextConfig