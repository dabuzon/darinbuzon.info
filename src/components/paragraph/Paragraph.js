import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import './paragraph.module.scss';

const Paragraph = (props) => {
  return (
    <div className="gridContainer">
      {documentToReactComponents(props.copy, options)}
    </div>
  );
};

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className={paragraphClass(node)}>{children}</p>
    ),
  },
};

function paragraphClass(node) {
  const className = 'mobileParagraph';
  return className;
}

export default Paragraph;
