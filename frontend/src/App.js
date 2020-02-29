import React from 'react';
import './styles/app.scss';

import { BrowserRouter as Router } from 'react-router-dom'
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Page from './layout/Page';
import Footer from './layout/Footer';

// REDUX STUFF

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <nav>
            <Navigation />
          </nav>
          <main>
              <Page />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
