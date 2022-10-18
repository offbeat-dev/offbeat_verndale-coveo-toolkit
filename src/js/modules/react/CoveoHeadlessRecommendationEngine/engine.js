import {
  buildRecommendationEngine,
  getSampleRecommendationEngineConfiguration
} from '@coveo/headless/recommendation';

const headlessRecommendationEngine = buildRecommendationEngine({
  configuration: getSampleRecommendationEngineConfiguration(),
  loggerOptions: { level: 'info' }
});

export default headlessRecommendationEngine;
