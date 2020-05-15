import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './paragraph.module.scss';

const Paragraph = (props) => {
  return (
    <div className={styles.container}>
      {documentToReactComponents(props.copy)}
    </div>
  );
};

export default Paragraph;
