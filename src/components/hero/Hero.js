import React from 'react';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import cx from 'classnames';

import styles from './hero.module.scss';

const Hero = (props) => {
  return (
    <div
    //   className={cx({
    //     [styles.index]: (props.location = 'Index'),
    //     [styles.hero]: props.location != 'Index',
    //   })}
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
      {/* <p className={styles.grid}>
        {documentToReactComponents(props.supportingText.supportingText)}
      </p> */}
    </div>
  );
};

export default Hero;
