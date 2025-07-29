/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = { 
    basePath: isProd ? '/johnsonzsong.github.io' : '',
    assetPrefix: isProd ? '/johnsonzsong.github.io/' : '',
    images: { unoptimized: true },
    output: 'export',
};

module.exports = nextConfig