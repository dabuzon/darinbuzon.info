module.exports = {
  siteMetadata: {
    title: 'Darin Buzon',
    author: 'Darin Buzon',
    description: 'Darin Buzon&#39;s homebase for cyberspace.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './components',
          containers: './containers',
          images: './images',
          state: './state',
          styles: './styles',
          utils: './utils',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Darin Buzon',
        start_url: '/',
        background_color: '#000000',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
