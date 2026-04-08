import { HashRouter } from 'react-router';

import { RouterApp } from '@src/app/routes';

import '@src/app/index.scss';


export function App() {
  return (
    <HashRouter>
      <RouterApp />
    </HashRouter>
  );
}