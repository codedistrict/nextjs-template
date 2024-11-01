module.exports = {
  locales: ['en', 'fr', 'es'], // Your supported languages
  defaultLocale: 'en', // Default language
  pages: {
    '*': ['common'], // Common namespace required on all pages
    '/': ['home'], // 'home' namespace required on the homepage
    // Define other pages and their required namespaces
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/locales/${locale}/${namespace}`).then(m => m.default),
};
