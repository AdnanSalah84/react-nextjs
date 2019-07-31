// module.exports = {
//     exportPathMap: function () {
//         return {
//             '/': { page: '/' },
//             '/about': { page: '/about' },
//             '/p/hello-nextjs': { page: '/post', query: { title: 'Hello Next.js' } },
//             '/p/learn-nextjs': { page: '/post', query: { title: 'Learn Next.js is awesome' } },
//             '/p/deploy-nextjs': { page: '/post', query: { title: 'Deploy apps with Zeit' } },
//             '/p/exporting-pages': { page: '/post', query: { title: 'Learn to Export HTML Pages' } }
//         };
//     }
// };

const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

module.exports = withBundleAnalyzer({
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
});