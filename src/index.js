import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

import Root from 'Root';

ReactDOM.render(
    <Root>
        <App /> {/** passed as a value props.children inside Root component*/}
    </Root>, 
    document.getElementById('root'));

