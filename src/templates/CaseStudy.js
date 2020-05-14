import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero, Head } from 'components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export class CaseStudy extends Component {
  constructor(props) {
    super();
    this.state = {
      data: _get(props, ['data']),
      dataFetch: _get(props, ['data', 'entry', 'contentBlocks']),
    };
  }

  render() {
    return (
      <Layout>
        <Head title={this.state.data.title} />
        {this.state.dataFetch.map((edge, index) => {
          if (edge.__typename === 'ContentfulHero') {
            this.props = {
              impactText: edge.impactText,
              labels: edge.labels,
              primaryLabel: edge.primaryLabel,
            };
            if (index === 0) {
              return <Hero {...this.props} />;
            } else {
              return <Hero {...this.props} indent={true} />;
            }
          } else if (edge.__typename === 'ContentfulImage') {
            console.log(edge.caption);
          }
        })}
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    entry: contentfulPageEntry(slug: { eq: $slug }) {
      title
      contentBlocks {
        ... on ContentfulSingleParagraph {
          body {
            json
          }
        }
        ... on ContentfulLabeledParagraph {
          copy {
            json
          }
          labels
        }
        ... on ContentfulImage {
          caption
          imageVariant
        }
        ... on ContentfulHero {
          primaryLabel
          labels
          impactText
          info {
            info
          }
        }
      }
    }
  }
`;

export default CaseStudy;
