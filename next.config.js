const withPlugins = require('next-compose-plugins');

console.info(`API_URL=${process.env.API_URL}`);
console.info(`APP_VERSION=${process.env.npm_package_version}`);

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    APP_VERSION: process.env.npm_package_version,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    USER_ID_EMAILJS: process.env.USER_ID_EMAILJS,
    EMAIL_SERVICE: process.env.EMAIL_SERVICE,
    TEMPLATE_EMAIL: process.env.TEMPLATE_EMAIL,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPlugins([], nextConfig);
