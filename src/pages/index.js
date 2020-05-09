import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

const IndexPage = ({ data }) => {
  const dataFetch = data.contentfulTemplateIndex.heroes;
  console.log(
    dataFetch.map((edge) => {
      return edge.info.info;
    })
  );

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
    contentfulTemplateIndex {
      heroes {
        image {
          fluid {
            src
          }
        }
        impactText
        labels
        location
        primaryLabel
        info {
          info
        }
      }
    }
  }
`;

export default IndexPage;
