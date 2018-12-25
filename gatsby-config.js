module.exports = {
  siteMetadata: {
    title: `Alex Carbajo`,
    description: `Designer focused in data-driven design and design systems.`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    'gatsby-plugin-offline',
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
        //icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-purgecss`,
  ],
}
