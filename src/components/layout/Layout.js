import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { get as __get } from 'lodash';

import GlobalStyle from '../GlobalStyle';
import styles from './layout.module.scss';

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query {
      footer: allContentfulLabeledParagraph {
        nodes {
          title
          contentType
          copy {
            json
          }
        }
      }
    }
  `);

  let footTop;
  if (props.pageType) {
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
    // Footer and header need their links appropriately modified
    <React.Fragment>
      <GlobalStyle />
      <div className={styles.container}>
        <header>
          <Link className={styles.footlink}>{props.title}</Link>
          <Link className={styles.footlink}>{props.pathReturn}</Link>
        </header>
        {props.children}
        <footer>
          <div className={styles.footTopContainer}>{footTop}</div>
          <div className={styles.footDirect}>
            <Link className={styles.footlink}>
              {props.homePage ? '' : 'Return'}
            </Link>
            {props.pageType ? (
              <Link className={styles.footlink}>Scroll to top</Link>
            ) : (
              <Link className={styles.footlink}>Next</Link>
            )}
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
