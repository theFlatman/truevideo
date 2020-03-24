import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "../GlobalStyles";
import styled from "styled-components";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import history from "../../history";
import * as ROUTES from "../../constants/routes";

const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 80px;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  z-index: 50;

  @media (max-width: 576px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  margin: 100px 30px 100px 30px;
  justify-content: center;
`;

const RenderedApp = () => (
  <div>
    <Router history={history}>
      <GlobalStyles />

      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </Switch>
      </ContentWrapper>
    </Router>
  </div>
);

export default RenderedApp;
