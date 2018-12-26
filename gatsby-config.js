module.exports = {
  siteMetadata: {
    title: `Alex Carbajo`,
    description: `Product Designer focused in travel industry and data-driven design.`,
    author: `@alexcarbajo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-T3XXNS8",
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // postCssPlugins: [somePostCssPlugin()],
        precision: 5,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Carbajo`,
        short_name: `alexcarbajo`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    `gatsby-plugin-purgecss`,
  ],
}
