import React from 'react';
import './App.css';
import List from './components/List';
import Home from './components/Home'
import {HashRouter, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/' exact component={()=> <Home/>}/>
          <Route path='/movies' component={()=> <List/>}/>
          <Route default component={()=> <div>404 not found</div>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
