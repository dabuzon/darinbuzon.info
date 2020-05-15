import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero, Head } from 'components';

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
      >
        <Head />
        {this.state.dataFetch.map((edge, index) => {
          this.props = {
            impactText: edge.impactText,
            labels: edge.labels,
            primaryLabel: edge.primaryLabel,
            info: edge.info.info,
            image: edge.image != null ? edge.image.fluid : false,
            location: edge.location,
            caselink: edge.primaryLabel.toLowerCase(),
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
      pathReturn
      contentBlocks {
        image {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid_withWebp
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

IndexPage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default IndexPage;
