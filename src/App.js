import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './dist/css/style.css';
import './fonts/stylesheet.css';

// components
import Navbar from './components/navbar/navbar_container.js';

// page
import Home from './pages/home/home-container.js';
import Blog from './pages/blog/blog-container.js';

function App() { 
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Navbar/>
            <Switch>  
              <Route path="/" exact component={Home} />
              <Route path="/blog" component={Blog} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
