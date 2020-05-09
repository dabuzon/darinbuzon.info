import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

const IndexPage = ({ data }) => {
  /* 
    Data is being fetched here
  */
  const dataFetch = data.contentfulTemplateIndex.heroes;
  console.log(dataFetch);

  /* 
    With the data fetched, we then pass it into props.
    This algorithm does not account for individual objects
    our populated array acquires

    However, this generalized props declaration allows the
    type of data to be consistent when passed into Hero.js
  */
  // let props = {
  //   impactText: dataFetch.impactText,
  //   labels: dataFetch.labels,
  //   primaryLabel: dataFetch.primaryLabel,
  //   location: dataFetch.location,
  //   // supportingText: dataFetch.supportingText.json
  // };

  return (
    <Layout>
      {dataFetch.map((edge) => {
        return (
          <Hero
            impactText={edge.impactText}
            labels={edge.labels}
            primaryLabel={edge.primaryLabel}
            location={edge.location}
            supportingText={edge.supportingText.supportingText}
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
        supportingText {
          supportingText
        }
      }
    }
  }
`;

export default IndexPage;
