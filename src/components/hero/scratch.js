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
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  `);

  /* 
    Filters every single hero that matches
    the page requesting for the heroes
  */

  const fetcher = data.allContentfulHero.nodes;
  const correctData = fetcher.filter((input) =>
    input.location.includes(`${props.location}`)
  );

  const final = correctData.filter((x) => {
    x.primaryLabel.includes(`${props.label}`);
  });
  console.log(final);

  const hero = (edge) => {
    return (
      <div className={66}>
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
  };

  /* 
    This approach to returning heroes
    bulks them all into one single hero.
    Problem most apparent for case studies
    when heroes can be staggered

    OK for indices but not CASE STUDIES
  */

  return (
    // <React.Fragment>{
    //   hero(correctData)
    // }</React.Fragment>

    <div>
      {correctData.map((edge) => {
        return (
          <div
            className={cx({
              [styles.index]: (correctData.location = 'Index'),
              [styles.hero]: correctData.location != 'Index',
            })}
          >
            {}
            {/* {photos.map((input) => {
              if (input.image != null) {
                return <img src={input.image.fluid.src}></img>;
              }
            })} */}
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
