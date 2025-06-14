/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://vercel.live https://va.vercel-scripts.com https://xumm.app https://xumm.app/assets/cdn;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.googletagmanager.com https://flagcdn.com https://a.tile.openstreetmap.org https://b.tile.openstreetmap.org https://c.tile.openstreetmap.org;
    font-src 'self';
    object-src 'self';
    base-uri 'self';
    form-action 'self';
    media-src 'self' https://*.cloudfront.net;
    connect-src 'self' wss://xumm.app http://127.0.0.1:8000 http://localhost:8000 https://oauth2.xumm.app https://xumm.app https://www.googletagmanager.com https://raw.githubusercontent.com ;
`;

const nextConfig = {
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ];
  }
};

export default nextConfig;
