import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import PageOne from './page-one';
import PageTwo from './page-two';
import PageThree from './page-three';


class App extends React.Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={PageOne}/>
          <Route path="/Profile" component={PageTwo}/>
          <Route path="/Weight" component={PageThree}/>
        </div>
      </Router>
    )
  }
}

export default App;