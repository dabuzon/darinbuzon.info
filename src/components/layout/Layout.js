import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

  const foot = () => {
    if (props.pageType) {
      return <Link>Scroll to top</Link>;
    } else {
      return <Link>Next</Link>;
    }
  };

  let pageTop;
  if (props.pageType) {
    pageTop = data.footer.nodes.map((edge) => {
      return (
        <div className={styles.footContent}>
          <div className={styles.pills}>{edge.title}</div>
          <div className={styles.lists}>
            {documentToReactComponents(edge.copy.json)}
          </div>
        </div>
      );
    });
  }
  console.log(props.homePage);
  let notHome = '';
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className={styles.container}>
        <header>
          <p>
            <Link>{props.title}</Link>
          </p>
          <p>
            <Link>{props.pathReturn}</Link>
          </p>
        </header>
        {props.children}
        {props.pageType ? (
          <footer>
            <div className={styles.footObj}>{pageTop}</div>
            <div className={styles.footDirect}>
              <p>
                <Link>{props.homePage ? notHome : 'Return'}</Link>
              </p>
              <p>{foot()}</p>
            </div>
          </footer>
        ) : (
          <footer className={styles.footDirect}>
            <p>
              <Link>{props.homePage ? notHome : 'Return'}</Link>
            </p>
            <p>{foot}</p>
          </footer>
        )}
      </div>
    </React.Fragment>
  );
};

export default Layout;
