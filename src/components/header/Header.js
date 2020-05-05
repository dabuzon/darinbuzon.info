import React from 'react';
import { useStaticQuery, Link } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulPageHome {
        title
      }
    }
  `);

  // Possible to add a clock
  let pageCheck = data.contentfulPageHome.title;
  return (
    <header className={styles.header}>
      <p className={styles.right}>
        <Link>{pageCheck}</Link>
      </p>
      <p className={styles.right}>
        <Link>{(pageCheck = 'Home' ? 'Writing' : 'Home')}</Link>
      </p>
    </header>
  );
};

export default Header;
