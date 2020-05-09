import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cx from 'classnames';

import styles from './hero.module.scss';

const Hero = (props) => {
  const classCheck = {
    index: () => {
      props.location = 'Index' ? true : false;
    },
    hero: () => {
      props.location = 'Index' ? true : false;
    },
  };

  return (
    <div
      className={cx({
        [styles.index]: classCheck.index,
        [styles.hero]: classCheck.hero,
      })}
    >
      <ul>
        <Link className={styles.pills}>{props.primaryLabel}</Link>
        {props.labels.map((label) => {
          return <Link className={styles.pills}>{label}</Link>;
        })}
      </ul>
      <div className={styles.grid}>
        <h1>{props.impactText}</h1>
      </div>
      <div className={styles.grid}>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default Hero;
