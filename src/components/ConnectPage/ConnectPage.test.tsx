import React from 'react';
import ReactDOM from 'react-dom';
import ConnectPage from './ConnectPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConnectPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});