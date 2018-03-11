import React from 'react';
import Popular from './popular/Popular';
import Navbar from './shared/Navbar';
import Home from './home/Home';
import Battle from './battle/Battle';
import ResultBattle from './battle/ResultBattle';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

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

export default App;