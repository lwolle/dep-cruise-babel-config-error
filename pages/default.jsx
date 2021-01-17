import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from 'src/Main/Main';

const startApp = () => {
    ReactDOM.render(<Main />, document.getElementById('container'));
};

startApp();
