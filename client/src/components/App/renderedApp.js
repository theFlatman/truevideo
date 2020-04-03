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
import Room from "../Room";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import history from "../../history";
import * as ROUTES from "../../constants/routes";

const NavigationWrapper = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  height: 5rem;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  z-index: 50;

  @media (max-width: 576px) {
    height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  margin: 2rem 2rem 6rem 2rem;
  justify-content: center;
  flex-direction: row;
`;

const ContentBox = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  flex-direction: column;
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
          <ContentBox>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ROOM} component={Room} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
          </ContentBox>
        </Switch>
      </ContentWrapper>
    </Router>
  </div>
);

export default RenderedApp;
