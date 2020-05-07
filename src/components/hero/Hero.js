import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import cx from 'classnames';

import styles from './hero.module.scss';

const Hero = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHero {
        nodes {
          location
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

  const fetcher = data.allContentfulHero.nodes;
  const correctData = fetcher.filter((input) =>
    input.location.includes(`${props.location}`)
  );

  return (
    <div>
      {correctData.map((edge) => {
        return (
          <div
            className={cx({
              [styles.index]: (correctData.location = 'Index'),
              [styles.hero]: correctData.location != 'Index',
            })}
          >
            <ul>
              <Link className={styles.pills}>{edge.primaryLabel}</Link>
              {edge.labels.map((label) => {
                return <Link className={styles.pills}>{label}</Link>;
              })}
            </ul>
            <div className={styles.grid}>
              <h1>{edge.impactText}</h1>
            </div>
            <div className={styles.grid}>
              <p>{documentToReactComponents(edge.supportingText.json)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
