import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Register from './components/Register';
import Login from './components/Login';


import './App.css';

const App = () => {

  console.log("its app file")
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
                //unable to do full beacuse of lld and proper hld nwo this basic flowso done quick
            </Switch>
          </section>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
