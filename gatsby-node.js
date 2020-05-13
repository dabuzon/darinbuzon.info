// This function makes pages specifically to individual blog posts
// This works if we want the slug to only be like /entry/*
// Can we make a createPages function that does the same thing
// but produces two separate slugs according to type of entry?
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulPageEntry {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading page');
  }

  console.log(result);
  result.data.allContentfulPageEntry.nodes.forEach((page) => {
    createPage({
      component: require.resolve('./src/templates/CaseStudy.js'),
      path: `/${page.slug}`,
      context: {
        slug: page.slug,
      },
    });
  });
};

// const { createRemoteFileNode } = require("gatsby-source-filesystem")

// exports.onCreateNode = async ({
//     node,
//     actions: { createNode },
//     store,
//     cache,
//     createNodeId
// }) => {

// }
