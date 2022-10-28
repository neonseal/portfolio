import React from 'react';
import ReactDOM from 'react-dom';
import NavigationMenu from './NavigationMenu';

it('It should mount', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
});
