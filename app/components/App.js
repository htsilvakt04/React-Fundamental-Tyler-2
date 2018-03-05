let React = require('react');
let Popular = require('./popular/Popular');
let Navbar = require('./shared/Navbar');
let Home = require('./home/Home');
let Battle = require('./battle/Battle');
let ResultBattle = require('./battle/ResultBattle');

let Route = require('react-router-dom').Route;
let Switch = require('react-router-dom').Switch;
let Router = require('react-router-dom').BrowserRouter;


class App extends React.Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/popular' component={Popular} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={ResultBattle} />
                        <Route render={function () {
                            return <h1>404</h1>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
module.exports = App;