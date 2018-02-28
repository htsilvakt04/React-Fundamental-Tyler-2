let React = require('react');
let ReactDOM = require('react-dom');

require('./index.css');


class App extends React.Component {
    render () {
        return (
            <ul>
                <li>my name here</li>
            </ul>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));




