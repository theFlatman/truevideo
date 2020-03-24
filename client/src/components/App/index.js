import React from "react";
import { withAuthentication } from "../Session";
import RenderedApp from "./renderedApp";

const App = () => {
  return <RenderedApp />;
};

export default withAuthentication(App);
