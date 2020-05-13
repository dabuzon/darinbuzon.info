import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero, Head } from 'components';

const CaseStudy = (props) => {
  return (
    <Layout>
      <Head title={props.data.entry.title} />
      {props.data.entry.title}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    entry: contentfulPageEntry(slug: { eq: $slug }) {
      id
      title
      contentBlocks {
        impactText
        info {
          info
        }
        labels
        location
        primaryLabel
        sys {
          contentType {
            sys {
              contentful_id
            }
          }
        }
      }
    }
  }
`;

export default CaseStudy;
