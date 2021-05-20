const settings = require.resolve('../src/hooks/useSiteSettings.tsx')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  // Banner
  // banner: settings.banner.asset.fluid.src,
  banner: '',

  siteTitle: settings.siteTitle, // Navigation and Site Title
  siteTitleAlt: settings.siteTitleAlt, // Alternative Site title for SEO
  siteTitleShort: settings.siteTitleShort, // short_name for manifest
  siteHeadline: settings.siteHeadline, // Headline for schema.org JSONLD
  siteUrl: 'http://cahuillaconsortium.org', // Domain of your site. No trailing slash!
  siteLanguage: settings.siteLanguage, // Language Tag on <html> element
  siteLogo: settings.siteLogo, // Used for SEO and manifest
  siteDescription: settings.siteDescription,
  author: settings.author, // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: settings.userTwitter, // Twitter Username
  ogSiteName: settings.ogSiteName, // Facebook Site Name
  ogLanguage: settings.ogLanguage, // og:language
  googleAnalyticsID: settings.googleAnalyticsID,

  googleTagID: 'GTM-TRLWX35',

  // Manifest and Progress color
  themeColor: settings.themeColor,
  backgroundColor: settings.backgroundColor
}
