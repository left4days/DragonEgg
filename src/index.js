import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";

import 'ui/uxStyles/mixins.scss';

// import App from './app';

const App = () => {
    return (
        <div>
            <p>React here!</p>
        </div>
    );
};


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


// ReactDOM.render(
//     <Router>
//         <App/>
//     </Router>,
// document.getElementById('root')
// );
