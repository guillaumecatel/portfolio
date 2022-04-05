// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['three'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...withTM()
}

module.exports = nextConfig
