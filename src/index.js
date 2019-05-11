import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {BrowserRouter, Route} from 'react-router-dom';

import Root from 'Root';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter> {/** passed as a value props.children inside Root component*/}
    </Root>, 
    document.getElementById('root'));

