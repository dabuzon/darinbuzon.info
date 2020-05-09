import React, { Component } from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

export class IndexPage extends Component {
  render() {
    const { data } = this.props;

    const dataFetch = data.contentfulTemplateIndex.heroes;
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
  }
}

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
        info {
          info
        }
        labels
        location
        primaryLabel
      }
    }
  }
`;

export default IndexPage;
