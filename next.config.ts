import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // تمرير طلبات الباك إند (Python)
        source: '/api/:path*',
        destination: 'http://2.24.14.60:8000/api/:path*', 
      },
      {
        // تمرير طلبات محرك الواتساب (Node.js & Socket.io)
        source: '/socket.io/:path*',
        destination: 'http://2.24.14.60:3001/socket.io/:path*', 
      },
    ];
  },
};

export default nextConfig;