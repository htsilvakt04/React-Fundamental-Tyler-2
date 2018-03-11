const React = require('react');
const Popular = require('./popular/Popular');
const Navbar = require('./shared/Navbar');
const Home = require('./home/Home');
const Battle = require('./battle/Battle');
const ResultBattle = require('./battle/ResultBattle');

const { Route, Switch, Router }= require('react-router-dom');


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
                        <Route render={ () => <h1>404</h1> }/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
module.exports = App;