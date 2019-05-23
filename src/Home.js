
import React from 'react';

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Home!</h1>
      </div>
    );
  }

}

export default Home ;



import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/Home.js';
import About from '../src/About';
import Login from '../src/Login.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';





ReactDOM.render((

  const Navbar = () =>
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkblue'
        }}
  <Router>
    <div>
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),
  document.getElementById('root')
);
