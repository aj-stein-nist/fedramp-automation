import 'uswds';

import { Provider } from 'overmind-react';
import React from 'react';
import ReactDOM from 'react-dom';

import type { Presenter } from '@asap/browser/presenter';

import type { RenderApp } from '../browser-controller';
import { App } from './components/App';
import './styles/index.scss';

export const createAppRenderer =
  (rootElement: HTMLElement, presenter: Presenter): RenderApp =>
  () => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider value={presenter}>
          <App />
        </Provider>
      </React.StrictMode>,
      rootElement,
    );
  };
