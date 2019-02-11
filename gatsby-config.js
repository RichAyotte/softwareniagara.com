module.exports = {
  siteMetadata: {
    title: 'Software Niagara',
  },
  plugins: [
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'categories',
        path: `${__dirname}/src/content/categories`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'events',
        path: `${__dirname}/src/content/events`,
      },
    },
  ],
}
