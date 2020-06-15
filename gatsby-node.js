exports.createPages = async ({ graphql, actions, reporter, page }) => {
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

  result.data.allContentfulPageCaseStudy.nodes.forEach((pages) => {
    createPage({
      component: require.resolve('./src/templates/CaseStudy.js'),
      path: `/${pages.slug}`,
      context: {
        slug: pages.slug,
      },
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/case-studies/)) {
    page.matchPath = '/case-studies/*';

    createPage(page);
  }
};
