import React from 'react';
import { useStaticQuery } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

const IndexPage = () => {
  // const data = useStaticQuery(graphql`

  // `)
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
