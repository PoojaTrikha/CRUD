import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Course from './components/Course';
import CreateExamRef from './components/CreateExamRef';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <nav className="navbar navbar-default">
                 <div className="container">
                     <div className="navbar-header">
                         <Link to="/" className="navbar-brand">React CRUD App</Link>
                         <button className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"> 
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                         </button>
                     </div>
                     <div className="collapse navbar-collapse" id="myNavbar">
                         <ul className ="nav navbar-nav">
                            <li>
                               <Link to="/course">Course</Link>
                            </li>
                            <li>
                              <Link to ="/createnew">Create New</Link>
                            </li>
                            <li>
                              <Link to ="/createnewExample">Create New Example</Link>
                            </li>
                         </ul>
                     </div>
                 </div>
            </nav>
            <Switch>
            <Route exact path="/" component={Course} />
                 <Route exact path="/course" component={Course}/>
                 <Route exact path="/createnew" component={Create}/>
                 <Route exact path="/edit/:id" component={Edit}/>
                 <Route exact path="/createnewExample" component={CreateExamRef}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
