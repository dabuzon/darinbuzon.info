import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero, Head } from 'components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export class CaseStudy extends Component {
  constructor(props) {
    super();
    this.state = {
      aux: _get(props, ['data', 'entry']),
      dataFetch: _get(props, ['data', 'entry', 'contentBlocks']),
    };
  }

  render() {
    return (
      <Layout
        title={this.state.aux.title}
        pathReturn={this.state.aux.pathReturn}
        isIndex={false}
      >
        <Head title={this.state.aux.title} />
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
      pathReturn
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
