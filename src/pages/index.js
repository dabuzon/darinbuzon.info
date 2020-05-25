import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import { Layout, Hero, Head } from 'components';

export class IndexPage extends Component {
  constructor(props) {
    super();
    this.state = {
      dataFetch: _get(props, ['data', 'home', 'contentBlocks'], []),
      aux: _get(props, ['data', 'home']),
    };
  }
  render() {
    return (
      <Layout
        title={this.state.aux.title}
        pathReturn={this.state.aux.pathReturn}
        isIndex={true}
        homePage={true}
        location={this.props.location}
      >
        <Head />
        {this.state.dataFetch.map((edge, index) => {
          this.props = {
            impactText: edge.impactText,
            labels: edge.labels,
            primaryLabel: edge.primaryLabel,
            copy: edge.copy.json,
            image: edge.image != null ? edge.image.fluid : false,
            page: edge.page,
            caselink: edge.primaryLabel.toLowerCase(),
            isIndex: true,
          };
          if (index === 0) {
            return <Hero {...this.props} />;
          } else {
            return <Hero {...this.props} indent={true} />;
          }
        })}
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    home: contentfulPageIndex(title: { eq: "Home" }) {
      title
      contentBlocks {
        ... on ContentfulHero {
          impactText
          copy {
            json
          }
          image {
            fluid(maxWidth: 2560, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          labels
          page
          primaryLabel
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default IndexPage;
