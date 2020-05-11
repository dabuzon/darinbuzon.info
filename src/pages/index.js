import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero } from 'components';

export class IndexPage extends Component {
  constructor(props) {
    super();

    // This is where we get the object `props`
    // and _get what we need from below
    // lodash allows for array path syntax apparently
    this.state = {
      data: _get(props, ['data']),
      dataFetch: _get(
        props,
        ['data', 'contentfulPageIndex', 'contentBlocks'],
        []
      ),
      aux: _get(props, ['data', 'contentfulPageIndex']),
      isFirst: true,
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
    console.log(this.state.data);
    return (
      <Layout
        title={this.state.aux.title}
        pathReturn={this.state.aux.pathReturn}
      >
        {this.state.dataFetch.map((edge) => {
          if (this.state.isFirst === true) {
            this.state.isFirst = false;
            return (
              <Hero
                impactText={edge.impactText}
                labels={edge.labels}
                primaryLabel={edge.primaryLabel}
                location={edge.location}
                info={edge.info.info}
                image={edge.image != null ? edge.image.fluid : false}
              />
            );
          } else {
            return (
              <Hero
                impactText={edge.impactText}
                labels={edge.labels}
                primaryLabel={edge.primaryLabel}
                location={edge.location}
                info={edge.info.info}
                image={edge.image != null ? edge.image.fluid : false}
                isSecond={true}
              />
            );
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
    }
  }
`;

IndexPage.propTypes = {
  image: PropTypes.object.isRequired,
};

export default IndexPage;
