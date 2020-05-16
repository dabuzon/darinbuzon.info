import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { get as _get } from 'lodash';

import {
  Layout,
  Hero,
  Head,
  Imagery,
  Paragraph,
  LabeledParagraph,
  Colophon,
} from 'components';
import styles from './casestudy.module.scss';

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
        location={this.props.location}
      >
        <Head title={this.state.aux.title} />
        <div className={styles.container}>
          {this.state.dataFetch.map((edge, index) => {
            if (edge.__typename === 'ContentfulHero') {
              this.props = {
                impactText: edge.impactText,
                labels: edge.labels,
                primaryLabel: edge.primaryLabel,
                info: edge.info != null ? edge.info.info : false,
              };
              if (index === 0) {
                return (
                  <div className={styles.top}>
                    <Hero {...this.props} />
                  </div>
                );
              } else {
                return <Hero {...this.props} indent={true} />;
              }
            } else if (edge.__typename === 'ContentfulImage') {
              this.props = {
                image: edge.image.fluid,
                caption: edge.caption,
                size: edge.size,
              };
              if (index < 2) {
                return <Imagery {...this.props} firstImage={true} />;
              } else {
                return <Imagery {...this.props} />;
              }
            } else if (edge.__typename === 'ContentfulSingleParagraph') {
              return <Paragraph copy={edge.body.json} />;
            } else if (edge.__typename === 'ContentfulLabeledParagraph') {
              return (
                <LabeledParagraph copy={edge.copy.json} labels={edge.labels} />
              );
            } else if (edge.__typename === 'ContentfulColophon') {
              this.props = {
                takeaways: edge.takeaways.json,
                colophon: edge.colophon.json,
                link: edge.linkToProject != null ? edge.linkToProject : false,
              };
              return <Colophon {...this.props} />;
            }
          })}
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    entry: contentfulPageCaseStudy(slug: { eq: $slug }) {
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
          size
          image {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulHero {
          primaryLabel
          labels
          impactText
          info {
            info
          }
        }
        ... on ContentfulColophon {
          linkToProject
          colophon {
            json
          }
          takeaways {
            json
          }
        }
      }
    }
  }
`;

export default CaseStudy;
