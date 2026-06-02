import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // عندما يطلب الموقع أي رابط يبدأ بـ /api/
        source: '/api/:path*',
        // قم بتمريره في الخفاء إلى السيرفر الألماني
        destination: 'http://2.24.14.60:8000/api/:path*', 
      },
    ];
  },
};

export default nextConfig;