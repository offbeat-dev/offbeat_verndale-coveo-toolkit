import {
  buildSearchEngine,
  getSampleSearchEngineConfiguration
} from '@coveo/headless';

const headlessEngine = buildSearchEngine({
  // configuration: getSampleSearchEngineConfiguration(),
  configuration: {
    accessToken: 'xx919f5690-8261-41ae-83b9-951877187f3d',
    organizationId: 'TestOrganization',
  },
  loggerOptions: { level: 'info' }
});

export default headlessEngine;
