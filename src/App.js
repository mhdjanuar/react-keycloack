import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Secured from './Secured';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/secured">secured component</Link></li>
          </ul>
          <Route path="/secured" component={Secured} />
        </div>
    </BrowserRouter>
  );
}

export default App;
