import React from 'react';
import ReactDOM from 'react-dom';
import ExperiencePage from './ExperiencePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExperiencePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});