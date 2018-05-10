import React, { Component } from 'react';
import '../styles/App.css';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import MenuSubmenus from './MenuSubmenusComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">

            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <span className="navbar-brand"><Link to="/">WebTitle</Link></span>
                </div>
                <ul className="nav navbar-nav">
                  <li><Link to="/"><span className="fa fa-home"> Home</span></Link></li>
                  <li><Link to="/menu"><span className="fa fa-code"> Menu component</span></Link></li>
                  <li><Link to="/menusubmenus"><span className="fa fa-bug"> MenuSubmenus component</span></Link></li>
                </ul>
              </div>
            </nav>
            <hr />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route path="/menusubmenus" component={MenuSubmenus} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;