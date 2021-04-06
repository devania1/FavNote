import React from 'react'; //to create react components
import ReactDOM from 'react-dom';//render to html

const App = React.createElement (
    'div',
    {
        className: 'wrapper',
    },
    [
        React.createElement (
            'h1',
            {
                className: 'mainHeader',
            },
            'Hello world!',
        ),
        React.createElement (
            'h2',
            {
                className: 'secondaryHeader',
            },
            'Hello eduweb!',
        )
    ]
);

ReactDOM.render(
    //rendered element JSX
    App,
    //target
    document.getElementById('root')
);