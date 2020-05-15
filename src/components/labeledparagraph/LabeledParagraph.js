import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './labeledparagraph.module.scss';

const LabeledParagraph = (props) => {
  return (
    <React.Fragment>
      <div className={styles.pills}>{props.labels}</div>
      <div className={styles.lists}>
        {documentToReactComponents(props.copy)}
      </div>
    </React.Fragment>
  );
};

export default LabeledParagraph;
