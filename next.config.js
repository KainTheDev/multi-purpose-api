/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/homepage',
                permanent: true
            }
        ]
    },
    env: {
        securityKey: process.env.securityKey
    }
}

module.exports = nextConfig
