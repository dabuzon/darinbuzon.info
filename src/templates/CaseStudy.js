import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { get as _get } from 'lodash';

import { Layout, SEO, Hero } from 'components';

const CaseStudy = (props) => {
  return <Layout>{props.data.entry.title}</Layout>;
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
