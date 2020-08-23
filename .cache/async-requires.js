// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-cabana-js": () => import("./../../../src/pages/Cabana.js" /* webpackChunkName: "component---src-pages-cabana-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-planit-js": () => import("./../../../src/pages/Planit.js" /* webpackChunkName: "component---src-pages-planit-js" */)
}

