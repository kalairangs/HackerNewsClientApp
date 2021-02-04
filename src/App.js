import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';
import ask from './components/pages/ask/ask';
import home from './components/pages/home/home';
import New from './components/pages/new/new';
import Ask from './components/pages/ask/ask';
import Job from './components/pages/job/job';
import Show from './components/pages/show/show';
import "./components/style.css"
import guidelines from './components/pages/guidelines/guidelines';
import FAQ from './components/pages/FAQ/FAQ';
import Security from './components/pages/Security/security';
import API from './components/pages/API/API';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="app">
        <Header />
        <Switch>
          <Route exact path = '/' component = {home}/>
          <Route exact path = '/new' component = {New}/>
          <Route exact path = '/ask' component ={Ask}/>
          <Route exact path = '/job' component ={Job}/>
          <Route exact path = '/show' component ={Show}/>
          <Route exact path = '/guidelines' component ={guidelines}/>
          <Route exact path = '/FAQ' component ={FAQ}/>
          <Route exact path = '/API' component ={API}/>
          <Route exact path = '/Security' component ={Security}/>
        </Switch>
        <Footer/>
        </div></Router>
    </React.Fragment>
  );
};
export default App;
