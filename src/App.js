import React, { Component } from 'react';
import { Detalle } from './paginas/detalle.js'
import { Home } from './paginas/home.js'
import { NotFaund } from './paginas/notFaund.js'
import {Switch, Route} from 'react-router-dom'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path ='/detalle/:id' component={Detalle}></Route>
          <Route component={NotFaund}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
