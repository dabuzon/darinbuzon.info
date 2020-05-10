import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero } from 'components';

export class IndexPage extends Component {
  constructor(props) {
    super();
    this.state = {
      data: _get(props, ['data']),
      dataFetch: _get(props, ['data', 'contentfulTemplateIndex', 'heroes'], []),
    };
  }
  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        data: nextProps.data,
        dataFetch: nextProps.data.contentfulTemplateIndex.heroes,
      });
    }
  }
  render() {
    return (
      <Layout>
        {this.state.dataFetch.map((edge) => {
          return (
            <Hero
              impactText={edge.impactText}
              labels={edge.labels}
              primaryLabel={edge.primaryLabel}
              location={edge.location}
              info={edge.info.info}
              image={edge.image.fluid}
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
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyContentfulFluid
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
