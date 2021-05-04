import React from 'react';
import AppContext from '../../Contex';

const ArticlesView = () => (
    <AppContext.Consumer>
        {(context) => (
            <p>This is {context}</p>
        )}
    </AppContext.Consumer>
);

export default ArticlesView;