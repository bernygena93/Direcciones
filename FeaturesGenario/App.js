import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import MainNavigator from './src/navigation';

import {init} from './src/db/index';

init()
  .then(() => console.log('database intialized'))
  .catch(err => console.log('error al inicair db', err));

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
