import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import '../styles/layout/Page.scss';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return(
    <>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/contact' exact component={ContactPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default Page;