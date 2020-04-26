module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "lutagy6g",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token:
          "skvDsxb17jRLStGmVOyk7LytVryxBxpi84BILPXx5QZYhhZwSY5Av2cMmnKMGAxlHfv2qzPy3Lj8jXkjO6lU88mnq2D0HmWbCE8DHL0qJBe7zmxLah5ZeMBh37FW20pcyF7O6J1ihZDlv6CEvbH7KzwHAStUsOSsdbleKvZL9onXms9yVHrC",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
