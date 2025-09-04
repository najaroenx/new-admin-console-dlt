// next.config.ts
import type { NextConfig } from "next";

const repo = "admin-console-dlt";                    // <<< ชื่อ GitHub repo
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ทำให้ build เป็นไฟล์ static ใช้กับ GitHub Pages ได้
  output: "export",

  // ให้สร้าง index.html ทุกไดเรกทอรี ลดโอกาส 404 บน Pages
  trailingSlash: true,

  // ตั้ง basePath/assetPrefix ให้ชี้ไปโฟลเดอร์ repo เมื่ออยู่ production
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,

  // ปิด Image Optimization เพื่อให้ next/image ใช้งานได้บน static export
  images: {
    unoptimized: true,

    // (ตัวเลือก) เก็บไว้ได้ เผื่ออนาคตกลับมาเปิด optimization
    remotePatterns: [
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
