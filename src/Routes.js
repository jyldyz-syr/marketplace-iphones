import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { history } from "./helpers/history";
import SignUp from "./containers/SignUp/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import AuthContextProvider from "./context/AuthContext";
import Home from "./containers/Home/Home";
import Header from "./containers/Header/Header";
import ProductsContextProvider from "./context/ProductsContext";

const Routes = () => {
  return (
    <div>
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <AuthContextProvider>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </AuthContextProvider>
        </Switch>
        <Switch>
          <ProductsContextProvider>
            <Route exact path="/" component={Home} />
          </ProductsContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
