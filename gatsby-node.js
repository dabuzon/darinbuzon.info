// This function makes pages specifically to individual blog posts
// This works if we want the slug to only be like /entry/*
// Can we make a createPages function that does the same thing
// but produces two separate slugs according to type of entry?
// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const entryTemplate = path.resolve('./src/templates/blog.js');
//   const result = await graphql(`
//     query {
//       allContentfulBlogPost {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);

//   result.data.allContentfulBlogPost.edges.forEach((edge) => {
//     createPage({
//       component: entryTemplate,
//       path: `/blog/${edge.node.slug}`,
//       context: {
//         slug: edge.node.slug,
//       },
//     });
//   });
// };

// const { createRemoteFileNode } = require("gatsby-source-filesystem")

// exports.onCreateNode = async ({
//     node,
//     actions: { createNode },
//     store,
//     cache,
//     createNodeId
// }) => {

// }
