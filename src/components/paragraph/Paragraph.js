import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './paragraph.module.scss';

const Paragraph = (props) => {
  return (
    <div className="gridContainer">{documentToReactComponents(props.copy)}</div>
  );
};

export default Paragraph;
