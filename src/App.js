import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyles } from './AppStyles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';

class App extends Component {
  render = () => {
    return (
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  };
}

export default App;
