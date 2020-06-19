exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    query {
      allContentfulPageCaseStudy {
        nodes {
          slug
        }
      }
    }
  `);

  createRedirect({
    fromPath: `/home`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  });

  if (result.errors) {
    reporter.panicOnBuild('Error loading page');
  }

  console.log(result);
  result.data.allContentfulPageCaseStudy.nodes.forEach((page) => {
    createPage({
      component: require.resolve('./src/templates/CaseStudy.js'),
      path: `/${page.slug}`,
      context: {
        slug: page.slug,
      },
    });
  });
};
