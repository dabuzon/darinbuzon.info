import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHero {
        nodes {
          primaryLabel
          labels
          impactText
          supportingText {
            json
          }
        }
      }
    }
  `);

  return (
    <div>
      {data.allContentfulHero.nodes.map((edge) => {
        return (
          <ul>
            <li>{edge.primaryLabel}</li>
            <li>{edge.labels}</li>
          </ul>
        );
      })}

      {data.allContentfulHero.nodes.map((edge) => {
        return <h1>{edge.impactText}</h1>;
      })}

      {data.allContentfulHero.nodes.map((edge) => {
        return <p>{documentToReactComponents(edge.supportingText.json)}</p>;
      })}
    </div>
  );
};

export default Hero;
