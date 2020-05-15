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
    }
  `);

  let footTop;
  if (props.isIndex) {
    footTop = data.footer.nodes.map((edge) => {
      return (
        <div>
          <div className={styles.pills}>{edge.title}</div>
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
          <Link
            className={styles.footlink}
            to={`/${props.pathReturn.toLowerCase()}`}
          >
            {props.pathReturn}
          </Link>
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
              <Link className={styles.footlink} to="/">
                Return
              </Link>
              <Link className={styles.footlink}>Next</Link>
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
