const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-cabana-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/src/pages/Cabana.js"))),
  "component---src-pages-cards-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/src/pages/Cards.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/src/pages/index.js"))),
  "component---src-pages-planit-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/src/pages/Planit.js"))),
  "component---src-pages-stealth-js": hot(preferDefault(require("/Users/johnsonsong/Desktop/johnsonzsong.github.io/src/pages/Stealth.js")))
}

