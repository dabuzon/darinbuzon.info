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
