/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "default",
    domains: ["localhost", "strapi.bat-max.atthost24.pl"],
  },
  i18n: {
    locales: ["pl-PL", "cs-CZ", "sk-SK"],
    defaultLocale: "pl-PL",
  },
};
