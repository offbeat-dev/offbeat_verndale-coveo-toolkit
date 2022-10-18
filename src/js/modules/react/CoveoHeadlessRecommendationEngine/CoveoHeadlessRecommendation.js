import React, { useState } from 'react';
import { buildRecommendationList } from '@coveo/headless/recommendation';
import RecommendationList from './RecommendationList';
import headlessRecommendationEngine from './engine';

const CoveoHeadlessRecommendation = () => {
  const recommendationListController = buildRecommendationList(
    headlessRecommendationEngine,
    {
      options: { id: 'Recommendation' }
    }
  );

  useState(() => {
    recommendationListController.refresh();
  }, []);

  return (
    <>
      <RecommendationList controller={recommendationListController} />
    </>
  );
};

export default CoveoHeadlessRecommendation;
