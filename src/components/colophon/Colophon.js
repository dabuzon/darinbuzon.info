import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './colophon.module.scss';

const Colophon = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.takeaway}>
        <div className={styles.pill}>Takeaways</div>
        {documentToReactComponents(props.takeaways)}
      </div>
      <div className={styles.colophon}>
        <div className={styles.pill}>Colophon</div>
        {props.link ? (
          <a className={styles.link} href={props.link} target="_blank">
            Link to project
          </a>
        ) : (
          false
        )}
        {documentToReactComponents(props.colophon)}
      </div>
    </div>
  );
};

export default Colophon;
