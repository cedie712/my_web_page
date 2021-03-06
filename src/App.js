import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

// components
import HeaderBlock from './components/header_block';


// css
// css
import './static/css/fontawesome/css/all.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import './static/css/main.css';


const Route = require('react-router-dom').Route;

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App" basename={process.env.PUBLIC_URL}>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={HeaderBlock} />
        </div>
      </Router>
    );
  }
}

export default App;
