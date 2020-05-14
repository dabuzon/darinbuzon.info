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
    console.log(this.state.dataFetch);
    return (
      <Layout>
        <Head title={this.state.data.title} />
        {this.state.dataFetch.map((edge, index) => {
          if (edge.__typename === 'ContentfulHero') {
            if (index === 0) {
              this.props = {
                impactText: edge.impactText,
                labels: edge.labels,
                primaryLabel: edge.primaryLabel,
                location: edge.location,
              };
            }
            console.log(edge.impactText);
            console.log(edge.primaryLabel);
            console.log(edge.location);
            return <Hero {...this.props} />;
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
          location
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
