import React from 'react';
import { useStaticQuery, Link } from 'gatsby';

import styles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPageHome {
        pageType
        title
      }
    }
  `);

  // Possible to add a clock
  let rightSide;
  let leftSide;
  let pageCheck = data.contentfulPageHome.pageType;
  let pageTitle = data.contentfulPageHome.title;
  if (pageCheck === 'Index' && pageTitle === 'Home') {
    leftSide = '';
    rightSide = 'Scroll to top';
  } else if (pageCheck === 'Index' && pageTitle !== 'Home') {
    leftSide = 'Return';
    rightSide = 'Next';
  }

  return (
    <footer className={styles.footer}>
      <p>
        <Link to="/">{leftSide}</Link>
      </p>
      <p>
        <Link>{rightSide}</Link>
      </p>
    </footer>
  );
};

export default Footer;
