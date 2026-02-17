/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["http://192.168.56.1:3000"],

  devIndicators: {
    buildActivity: false,
    appIsrStatus: false,
  },
};

module.exports = nextConfig;
