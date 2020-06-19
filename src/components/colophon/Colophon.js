import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './colophon.module.scss';

const Colophon = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outcomes}>
        <div className="pills">Outcomes</div>
        {documentToReactComponents(props.outcomes)}
      </div>
      <div className={styles.colophon}>
        <div className="pills">Colophon</div>
        {props.link ? (
          <a
            className={styles.link}
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
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
