import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero, Head } from 'components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const CaseStudy = (props) => {
  return (
    <Layout>
      <Head title={props.data.entry.title} />
      {/* {props.data.entry.contentBlocks.map((edge) => {
        if (edge.__typename === 'ContentfulHero') {
          return (
            <Hero
              impactText={edge.impactText}
              labels={edge.labels}
              primaryLabel={edge.primaryLabel}
              location={edge.location}
            />
          );
        }
      })} */}
    </Layout>
  );
};

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
