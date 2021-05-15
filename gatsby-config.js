/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Johnson Song",
    titleTemplate: "%s • Johnson Song",
    description: "Johnson Song, UX/UI designer at Carta (Stanford) and C3.ai, previously software engineer at Facebook, Messenger, and Kangaroo.",
    url: "http://johnsonsong.me", // No trailing slash allowed!
    image: "/avatar.png",
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
              variants: [`400`, `500`, `600`, `700`]
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
