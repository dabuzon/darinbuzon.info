import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero, Head } from 'components';

export class IndexPage extends Component {
  constructor(props) {
    super();
    this.state = {
      dataFetch: _get(
        props,
        ['data', 'contentfulPageIndex', 'contentBlocks'],
        []
      ),
      aux: _get(props, ['data', 'contentfulPageIndex']),
      pageType: _get(props, [
        'data',
        'contentfulPageIndex',
        'sys',
        'contentType',
        'sys',
        'contentful_id',
      ]),
    };
  }
  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        data: nextProps.data,
        dataFetch: nextProps.data.contentfulPageIndex.contentBlocks,
      });
    }
  }
  render() {
    return (
      <Layout
        title={this.state.aux.title}
        pathReturn={this.state.aux.pathReturn}
        pageType={(this.state.pageType = 'pageIndex' ? true : false)}
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
    contentfulPageIndex {
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
      sys {
        contentType {
          sys {
            contentful_id
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default IndexPage;
