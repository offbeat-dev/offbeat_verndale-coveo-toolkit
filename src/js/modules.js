/* eslint-disable global-require */
import globModules from './glob-modules';

const reactModule = (Component, nodeList) => {
  const React = require('react');
  const { render } = require('react-dom');

  nodeList.forEach(node => render(<Component {...node.dataset} />, node));
};

const modules = [
  {
    name: 'CoveoAtomicSearchInterface',
    loader: () => import('./modules/CoveoAtomicSearchInterface')
  },
  {
    name: 'CoveoHeadlessJS',
    loader: () => import('./modules/CoveoHeadlessJS')
  },
  {
    name: 'CoveoHeadlessSearchEngine',
    loader: () => import('./modules/react/CoveoHeadlessSearchEngine'),
    render: reactModule
  },
  {
    name: 'CoveoHeadlessRecommendationEngine',
    loader: () => import('./modules/react/CoveoHeadlessRecommendationEngine'),
    render: reactModule
  }
];

export default [...globModules, ...modules];
