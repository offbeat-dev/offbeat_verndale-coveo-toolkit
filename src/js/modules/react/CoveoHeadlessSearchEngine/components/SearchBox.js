import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { loadAdvancedSearchQueryActions } from '@coveo/headless';

const SearchBox = ({ controller, engine }) => {
  const [state, setState] = useState(controller.state);
  const isEnterKey = e => e.key === 'Enter';
  const advancedQuerySearchActionCreator =
    loadAdvancedSearchQueryActions(engine);

  engine.dispatch(
    advancedQuerySearchActionCreator.registerAdvancedSearchQueries({
      aq: ''
    })
  );

  useEffect(
    () =>
      controller.subscribe(() => {
        setState(controller.state);
      }),
    []
  );

  const handleKeyDown = e => {
    if (isEnterKey(e)) {
      engine.dispatch(
        advancedQuerySearchActionCreator.updateAdvancedSearchQueries({
          aq: ''
        })
      );
      controller.submit();
    }
  };

  const searchClick = () => {
    engine.dispatch(
      advancedQuerySearchActionCreator.updateAdvancedSearchQueries({
        aq: ''
      })
    );
    controller.submit();
  };

  const handleInputChange = e => {
    controller.updateText(e.target.value);
  };

  return (
    <>
      <div className="coveo-headless-search__bar">
        <div className="coveo-headless-search__input-container">
          <input
            className="coveo-headless-search__input"
            value={state.value}
            onChange={handleInputChange}
            onKeyDown={e => handleKeyDown(e)}
          />
          {state.suggestions?.length > 0 && (
            <ul>
              {state.suggestions.map(suggestion => {
                const value = suggestion.rawValue;
                return (
                  <li
                    key={value}
                    onClick={() => controller.selectSuggestion(value)}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button
          className="coveo-headless-search__btn"
          onClick={() => searchClick()}
        >
          Search
        </button>
      </div>
    </>
  );
};

SearchBox.propTypes = {
  controller: PropTypes.object.isRequired,
  engine: PropTypes.object
};

export default SearchBox;
