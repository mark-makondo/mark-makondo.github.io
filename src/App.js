import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './dist/css/style.css';
import './fonts/stylesheet.css';

// components
import Navbar from './components/navbar/navbar_container.js';
import Footer from './components/footer/footer.js';

// page
import Home from './pages/home/homeContainer.js';
// import Blog from './pages/blog/blog.js';

function App() { 

  return (
    <Router>
      <div className="App">
          <Navbar/>
            <Switch>  
              <Route path="/" exact component={Home} />
              {/* <Route path="/blog" component={Blog} /> */}
            </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
