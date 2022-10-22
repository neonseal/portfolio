import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});