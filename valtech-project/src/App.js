import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import PropertyPage from './PropertyPage';
import PropertyFormPage from './PropertyFormPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui three item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Trending Projects</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/propertyList/new">Add New Project</NavLink>
        </div>
        <Route exact path='/' component={PropertyPage} />
        <Route path='/propertyList/new' component={PropertyFormPage} />
        <Route path='/property/:_id' component={PropertyFormPage} />
      </div>
    );
  }
}

export default App;
