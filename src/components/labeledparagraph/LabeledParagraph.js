import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from './labeledparagraph.module.scss';

const LabeledParagraph = (props) => {
  return (
    <div className="gridContainer">
      <div className="labeledpara">
        <div class="theContent">
          {props.labels.map((labels, index) => {
            if (index > 0) {
              return <div className="pills">{labels}</div>;
            } else {
              return <div className="pills">{labels}</div>;
            }
          })}
        </div>
        <div className={styles.lists}>
          {documentToReactComponents(props.copy)}
        </div>
      </div>
    </div>
  );
};

export default LabeledParagraph;
