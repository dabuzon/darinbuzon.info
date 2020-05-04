import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
  // `data` is what gets the data we need from GraphQL!
  // This is our query that fetches the data we want from Contentful

  // DATA IS BEING QUERIED!!!
  const data = useStaticQuery(graphql`
    query {
      allContentfulPageIndex {
        edges {
          node {
            mainLabel
            links
            mainDescriptor {
              mainDescriptor
            }
          }
        }
      }
    }
  `);

  // Here is how we want our component rendered
  // We could use styles to just have this just a few components listed
  return (
    // this is a modular component
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulPageIndex.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              {/* This "Link to" creates the slug in the URL field */}
              <h2>{edge.node.mainLabel}</h2>
              <p>{edge.node.links}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
