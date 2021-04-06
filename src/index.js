import React from 'react'; //to create react components
import ReactDOM from 'react-dom';//render to html

//functional component, use {} only with return
const App = () => (
    <div className="wrapper">
        <h1 className="mainHeader">Hello world!</h1>
        <h2 className="secondaryHeader">Hello weduweb!</h2>
    </div>
); 


ReactDOM.render(
    //rendered element
    <App />,
    //target
    document.getElementById('root')
);