import React from 'react';
import { useStaticQuery, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

  /* 
     HOW DO WE FUCKING
     DEFINE FETCHER
     TO DO FILTER?? 
  */

  // function filtering(input) {
  //   input.location = props.location ? true : false;
  // }

  // const correctData = fetcher.location.filter(filtering);

  // console.log(correctData);

  return (
    <div className={styles.hero}>
      {/* {data.allContentfulHero.nodes.location
        .filter((input) => {
          input = props.location ? true : false;
        })
        .map((edge) => {
          return (
            <ul>
              <Link className={styles.pills}>{edge.primaryLabel}</Link>
              {edge.labels.map((label) => {
                return <Link className={styles.pills}>{label}</Link>;
              })}
            </ul>
          );
        })} */}

      {fetcher.map((edge) => {
        return (
          <ul>
            <Link className={styles.pills}>{edge.primaryLabel}</Link>
            {edge.labels.map((label) => {
              return <Link className={styles.pills}>{label}</Link>;
            })}
          </ul>
        );
      })}

      {fetcher.map((edge) => {
        return (
          <div className={styles.grid}>
            <h1>{edge.impactText}</h1>
          </div>
        );
      })}

      {fetcher.map((edge) => {
        return (
          <div className={styles.grid}>
            <p>{documentToReactComponents(edge.supportingText.json)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
