import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cx from 'classnames';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
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
  `);

  let pathCheck = data.caseStudy.nodes.filter(
    (urlPath) => urlPath.slug !== props.location.pathname.substr(1)
  );

  let footTop;
  if (props.isIndex) {
    footTop = data.footer.nodes.map((edge) => {
      return (
        <div>
          <div className="pills">{edge.title}</div>
          <div className={styles.lists}>
            {documentToReactComponents(edge.copy.json)}
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className={styles.container}>
        <header>
          <p className={styles.footlink}>{props.title}</p>
          {/* 
               WE WILL REACTIVATE THIS ONCE WE GET TIME TO CODE OUT THE WRITING INDEX
               FOR NOW IT IS ONLY A NICE-TO-HAVE
            */
          /* <Link className="footlink" to={`/${props.pathReturn.toLowerCase()}`}>
            {props.pathReturn}
          </Link> */}
        </header>
        {props.children}
        <footer>
          {props.isIndex ? (
            <div className={styles.footTopContainer}>{footTop}</div>
          ) : (
            false
          )}
          {!props.isIndex ? (
            <div className={styles.entry}>
              <Link className="footlink" to="/">
                Return
              </Link>
              <Link
                className="footlink"
                to={`/${pathCheck.map((result) => result.slug)}`}
              >
                Next case study &#8594;
              </Link>
            </div>
          ) : (
            false
          )}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
