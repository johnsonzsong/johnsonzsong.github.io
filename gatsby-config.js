/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Johnson Song",
    titleTemplate: "%s • Johnson Song",
    description: "Johnson Song, UX/UI designer at C3.ai, previously software engineer at Facebook and Messenger.",
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
              family: `Oswald`,
              variants: [`400`, `500`, `600`, `700`]
            },
            {
              family: `Open Sans`,
              variants: [`400`, `500`, `600`, `700`]
            },
            {
              family: `Roboto Mono`,
              variants: [`400`, `500`, `600`, `700`]
            }
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-132748656-1", // Google Analytics / GA
        ],
      },
    },
  ],
}