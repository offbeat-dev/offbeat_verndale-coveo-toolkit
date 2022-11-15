import { buildInteractiveResult } from '@coveo/headless';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import filterProtocol from '../../../../utils/filter-protocol';

const ResultLink = ({ engine, result }) => {
  const interactiveResult = buildInteractiveResult(engine, {
    options: { result }
  });

  useEffect(() => () => interactiveResult?.cancelPendingSelect(), []);
  return (
    <a
      href={filterProtocol(result.clickUri)}
      onClick={() => interactiveResult.select()}
      onContextMenu={() => interactiveResult.select()}
      onMouseDown={() => interactiveResult.select()}
      onMouseUp={() => interactiveResult.select()}
      onTouchStart={() => interactiveResult.beginDelayedSelect()}
      onTouchEnd={() => interactiveResult.cancelPendingSelect()}
    >
      {result.title}
    </a>
  );
};

ResultLink.propTypes = {
  engine: PropTypes.object.isRequired,
  result: PropTypes.object,
  children: PropTypes.node
};

export default ResultLink;
