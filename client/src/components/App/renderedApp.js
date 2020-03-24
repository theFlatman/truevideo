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

const FlexWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;

  @media (max-width: 576px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  margin-top: 150px;
  justify-content: center;
`;

const RenderedApp = () => (
  <div>
    <Router history={history}>
      <GlobalStyles />
      <FlexWrapper>
        <NavigationWrapper>
          <Navigation />
        </NavigationWrapper>
        <ContentWrapper>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </Switch>
        </ContentWrapper>
      </FlexWrapper>
    </Router>
  </div>
);

export default RenderedApp;
