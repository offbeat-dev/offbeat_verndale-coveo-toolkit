import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  loadSearchActions,
  loadAdvancedSearchQueryActions
} from '@coveo/headless';

const AdvancedQuery = ({ controller, engine }) => {
  const [, setState] = useState(controller.state);
  useEffect(
    () =>
      controller.subscribe(() => {
        setState(controller.state);
      }),
    []
  );

  const { executeSearch } = loadSearchActions(engine);

  const advancedQuerySearchActionCreator =
    loadAdvancedSearchQueryActions(engine);

  engine.dispatch(
    advancedQuerySearchActionCreator.registerAdvancedSearchQueries({
      aq: ''
    })
  );

  return (
    <div>
      <button
        className="coveo-headless-search__load-more-btn"
        onClick={() => {
          engine.dispatch(
            advancedQuerySearchActionCreator.updateAdvancedSearchQueries({
              aq: '@author="bbc" $q()'
            })
          );
          engine.dispatch(executeSearch());
        }}
      >
        Load More Results
      </button>
    </div>
  );
};

AdvancedQuery.propTypes = {
  controller: PropTypes.object.isRequired,
  engine: PropTypes.object.isRequired
};

export default AdvancedQuery;
