import NextFederationPlugin from '@module-federation/nextjs-mf';

export const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main_app',
        remotes: {
          shop_app: `shop_app@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        extraOptions: {
          debug: false,
          exposePages: false,
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
