let React = require('react');
let Popular = require('./popular/Popular');

class App extends React.Component {
    render () {
        return (
            // navbar

            // Router which wrap all components related to the link above
            <div className='container'>
                <Popular/>
            </div>
        )
    }
}
module.exports = App;