import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RecommendationList = props => {
  const { controller } = props;
  const [state, setState] = useState(controller.state);
  useEffect(() => controller.subscribe(() => setState(controller.state)), []);

  if (state.error) {
    return (
      <div>
        <div>Oops {state.error.message}</div>
        <code>{JSON.stringify(state.error)}</code>
      </div>
    );
  }

  return (
    <div>
      <ul style={{ textAlign: 'left' }}>
        {state.recommendations.map(recommendation => (
          <li key={recommendation.uniqueId}>
            <article>
              <h2>
                <a>{recommendation.title}</a>
              </h2>
              <p>{recommendation.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

RecommendationList.propTypes = {
  controller: PropTypes.object.isRequired
};

export default RecommendationList;
