module.exports = {
  templates: {
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'vk0z5crn4dnq', // required
        accessToken: 'WRIYEBk4JxfifM90V8RCO6UE4odxb1suOkq4COdnuF4', // required
        typeName: 'Contentful'
      }
    }
  ]
}
