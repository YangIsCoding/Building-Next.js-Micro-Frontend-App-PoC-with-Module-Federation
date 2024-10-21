import NextFederationPlugin from '@module-federation/nextjs-mf';

export const nextConfig = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop_app',
        remotes: {},
        filename: 'static/chunks/remoteEntry.js',
        exposes: {'./Products': './components/Products.js','./category': './src/pages/category/index.js','./books': './src/pages/books/index.js',},
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
