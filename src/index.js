import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import help from './help';

const Title = React.createElement(
    "div",
    {className: "title"},
    "Hello World!"
);

class MyReactComponent extends React.Component {
    render() {
        return <p>This was genereted using React.Component</p>
    }
}

class MyPureReactComponent extends React.PureComponent {
    render() {
        return <p>This was genereted using React.PureComponent</p>
    }
}

function FunctionalComponent() {
    const alertSomething = () => {
        alert('That`s all');
    }

    return (
        <div>
            <p>This is functional component</p>
            <button onClick={alertSomething}>Click here</button>
        </div>
    )
}

ReactDOM.render(
    <div>
        {Title}
        <p>{help('A', 'B')}</p>
        <MyReactComponent/>
        <MyPureReactComponent/>
        <FunctionalComponent/>
    </div>,
    document.getElementById('movie-app')
);
