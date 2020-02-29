import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import '../styles/layout/Page.scss';
import HomePage from '../pages/HomePage';
import ListPage from '../pages/ListPage';
import UserPage from '../pages/UserPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
  return(
    <>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/user' exact component={UserPage}/>
        <Route path='/list' exact component={ListPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default Page;