console.info(`API_URL=${process.env.API_URL}`);
console.info(`APP_NAME=${process.env.APP_NAME}`);
console.info(`APP_VERSION=${process.env.npm_package_version}`);

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
