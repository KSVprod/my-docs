import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/api-schemas/',
    component: ComponentCreator('/api-schemas/', 'd68'),
    exact: true
  },
  {
    path: '/global-search',
    component: ComponentCreator('/global-search', '224'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8db'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '53f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'eaa'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4ba'),
                exact: true,
                sidebar: "."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '234'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
