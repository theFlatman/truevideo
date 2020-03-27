import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import styled from "styled-components";
import { Logo } from "../../assets/logo.js";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

const StyledMenu = styled.nav`
  display: flex;
  background: #c5986a;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 300px;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-flow: wrap;
    margin-top: 3rem;
    list-style-type: none;
    padding: 1rem;
  }

  li {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 2rem;
      text-align: center;
    }

    &:hover {
      color: white;
    }
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  div {
    display: flex;
    width: 2rem;
    height: 0.25rem;
    background: #c5986a;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    z-index: 2;

    :first-child {
      background: ${({ open }) => (open ? "white" : "#c5986a")};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      background: ${({ open }) => (open ? "white" : "#c5986a")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      background: ${({ open }) => (open ? "white" : "#c5986a")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: white;

  overflow: hidden;
  padding: 0 3rem 0 3rem;

  @media (max-width: 576px) {
    padding: 0.5rem 2rem 0.5rem 2rem;

    button {
      max-width: 5rem;
      font-size: 0.75rem;
    }
  }

  svg {
    width: 150px;
    fill: #c5986a;
  }
`;

const InvisibleBox = styled.div`
  display: flex;
  width: 100px;
`;

const Menu = ({ open, authUser }) => {
  return (
    <StyledMenu open={open}>
      <NavigationAuth authUser={authUser} />
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const Navigation = ({ authUser }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", _.throttle(mouseOnSidebar, 400));
    return () => {
      document.removeEventListener(
        "mousemove",
        _.throttle(mouseOnSidebar, 400)
      );
    };
  });

  const mouseOnSidebar = e => {
    const threshold = 300;

    if (e.clientX < threshold) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <StyledHeader>
      {authUser ? (
        <>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} authUser={authUser} />
          </div>
          <Link to={ROUTES.LANDING}>
            <Logo />
          </Link>
          <SignOutButton />
        </>
      ) : (
        <>
          <NavigationNonAuth />
        </>
      )}
    </StyledHeader>
  );
};

const NavigationAuth = ({ authUser }) => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
      )}
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <>
    <InvisibleBox />
    <div>
      <Link to={ROUTES.LANDING}>
        <Logo />
      </Link>
    </div>
    <div>
      <Link to={ROUTES.SIGN_IN}>
        <button>Anmelden</button>
      </Link>
    </div>
  </>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
