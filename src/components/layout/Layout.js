import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import { get as _get } from 'lodash';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

export class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      foot: _get(props, ['data', 'footer', 'nodes']),
      cases: _get(props, ['data', 'caseStudy', 'nodes']),
    };
  }

  sluglink = () => {
    this.state.foot
      .filter(
        (urlPath) => urlPath.slug !== this.props.location.pathname.substr(1)
      )
      .map((result) => result.slug);
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <div className={styles.container}>
          <header>
            <p className={styles.footlink}>{this.props.title}</p>
            {/* 
                 WE WILL REACTIVATE THIS ONCE WE GET TIME TO CODE OUT THE WRITING INDEX
                 FOR NOW IT IS ONLY A NICE-TO-HAVE
              */
            /* <Link className="footlink" to={`/${props.pathReturn.toLowerCase()}`}>
              {props.pathReturn}
            </Link> */}
          </header>
          {this.props.children}
          <footer>
            {this.props.isIndex ? (
              <div className={styles.footTopContainer}>
                {this.props.isIndex
                  ? this.state.foot.map((edge) => {
                      return (
                        <div>
                          <div className="pills">{edge.title}</div>
                          <div className={styles.lists}>
                            {documentToReactComponents(edge.copy.json)}
                          </div>
                        </div>
                      );
                    })
                  : false}
              </div>
            ) : (
              false
            )}
            {!this.props.isIndex ? (
              <div className={styles.entry}>
                <Link className="footlink" to="/">
                  Return
                </Link>
                {!this.props.isFour ? (
                  <Link
                    className="footlink"
                    to={
                      this.props.caseStudy
                        ? `/${
                            this.sluglink()[
                              Math.floor(Math.random() * this.sluglink().length)
                            ]
                          }`
                        : false
                    }
                  >
                    Next case study &#8594;
                  </Link>
                ) : (
                  false
                )}
              </div>
            ) : (
              false
            )}
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query {
    footer: allContentfulLabeledParagraph(
      filter: { contentType: { eq: "Footer" } }
      sort: { fields: title }
    ) {
      nodes {
        title
        copy {
          json
        }
      }
    }
    caseStudy: allContentfulPageCaseStudy {
      nodes {
        slug
      }
    }
  }
`;

export default Layout;
