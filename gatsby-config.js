/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Johnson Song`,
    description: `Handmade from scratch`,
    author: `@johnson.song`,
  },
  pathPrefix: "/",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-page-transitions`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Poppins`,
              variants: [`400`, `500`, `700`]
            },
            {
              family: `Proxima Nova`,
            },
            {
              family: `Montserrat`,
            },
            {
              family: `PT Serif`,
            }
          ],
        },
      },
    },
  ],
}
