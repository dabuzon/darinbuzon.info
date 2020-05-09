import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

const IndexPage = ({ data }) => {
  const dataFetch = data.allContentfulTemplateIndex.nodes.heroes;

  return (
    <Layout>
      {dataFetch.map((edge) => {
        return (
          <Hero
            impactText={edge.impactText}
            labels={edge.labels}
            primaryLabel={edge.primaryLabel}
            location={edge.location}
            info={edge.info.info}
          />
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulTemplateIndex {
      nodes {
        heroes {
          image {
            fluid {
              src
            }
          }
          impactText
          info {
            info
          }
          labels
          location
          primaryLabel
        }
      }
    }
  }
`;

export default IndexPage;
