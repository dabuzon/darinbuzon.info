import React from 'react';
import { useStaticQuery } from 'gatsby';

import { Layout, SEO, Hero } from 'components';

const IndexPage = () => {
  // const data = useStaticQuery(graphql`

  // `)
  return (
    <Layout>
      <Hero location="Index" />
    </Layout>
  );
};

export default IndexPage;
