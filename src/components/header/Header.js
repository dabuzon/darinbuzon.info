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

  let pageCheck = data.contentfulPageHome.title;
  return (
    <header className={styles.header}>
      <p>
        <Link>{pageCheck}</Link>
      </p>
      <p>
        <Link>{(pageCheck = 'Home' ? 'Writing' : 'Home')}</Link>
      </p>
    </header>
  );
};

export default Header;
