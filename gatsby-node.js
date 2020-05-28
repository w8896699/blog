/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   // console.log('wtfwtftwtfwftwftwft', node.internal.type); //这个代码用不了了,因为我用了contentful里也有markdown, 但是不用像我最开始那样创建page, 所以就会出来几个空的slug.... 血泪史debug到3am
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode });

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug, // markdown的地址
//     });
//   }
// };

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
      {
      allContentfulBlog {
          edges {
            node {
              slug
            
          }
        }
      }
      allContentfulInterest {
        edges {
          node {
            slug
          }
       }
      }
    }
    `).then((result) => {
    // console.log('haihia', result);
    // result.data.allMarkdownRemark.edges.forEach(({ node }) => { // loop through every file we have and manually create new page using template
    //   createPage({
    //     path: node.fields.slug, // use slug as path
    //     component: path.resolve(`./src/template/markdown.template.js`),
    //     context: {
    //       slug: node.fields.slug,
    //     },
    //   });
    // });
    result.data.allContentfulBlog.edges.forEach(({ node }) => {
      createPage({
        path: `blog/${node.slug}`, // use slug as path
        component: path.resolve('./src/template/contentfulBlog.template.js'),
        context: {
          slug: node.slug,
        },
      });
    });
    result.data.allContentfulInterest.edges.forEach(({ node }) => {
      createPage({
        path: `aboutMe/${node.slug}`, // use slug as path
        component: path.resolve('./src/template/contentfulInterest.template.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};
