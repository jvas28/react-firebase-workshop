import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Branding from './components/Branding/Branding';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('kanban-board'));
ReactDOM.render(<Branding />, document.getElementById('branding'));

serviceWorker.register();
