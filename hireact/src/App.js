import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Route path="/main" component={Main} />
      <Route path="/footer" component={Footer} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default App;
