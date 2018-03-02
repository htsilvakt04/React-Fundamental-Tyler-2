let React = require('react');
let Popular = require('./popular/Popular');

class App extends React.Component {
    render () {
        return (
            <div>
                <Popular/>
            </div>
        )
    }
}
module.exports = App;