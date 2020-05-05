import React from 'react';
import { useStaticQuery, Link } from 'gatsby';

import styles from './hero.module.scss';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero {
        primaryLabel
        labels
        impactText
        supportingText {
          supportingText
        }
      }
    }
  `);

  return <div></div>;
};

export default Hero;
