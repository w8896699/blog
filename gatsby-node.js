/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({
      node,
      name: `slug`,
      value: slug, // markdown的地址
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
      {
       allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      allContentfulBlog {
          edges {
            node {
              slug
            
          }
        }
      }
      }
    `).then((result) => {
    // console.log('haihia', result);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => { // loop through every file we have and manually create new page using template
      createPage({
        path: node.fields.slug, // use slug as path
        component: path.resolve(`./src/template/markdown.template.js`),
        context: {
          slug: node.fields.slug,
        },
      });
    });
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`, // use slug as path
        component: path.resolve('./src/template/contentfulBlog.template.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
