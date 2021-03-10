import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Services } from './Services';
import { Images } from './Images';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbotron />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Images" component={Images} />
          <Route path="/NoMatch" component={NoMatch} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}
}

export default App;
