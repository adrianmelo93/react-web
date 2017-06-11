import React from 'react';
import Home from './Home';
import Main from './Main';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className="b">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/main">Main</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/main" component={Main}/>
    </div>
  </Router>
)
export default App;
