import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyled from './globalSyled.component';
import NavigationComponent from './components/Navigation/navComponent';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 20px auto 0;
  border-color: red;
`;

export default class App extends Component {

  render() {
    return (
      <>
        <NavigationComponent />
        <GlobalStyled />
        <Suspense
          fallback={
            <div className="sweet-loading">
              <PuffLoader css={override} size={150} color={"#d3212d"} />
            </div>
          }
        >
          <Switch>
            <Route
              path="/"
              exact
              component={lazy(() =>
                import(
                  "./components/HomePage/homePage" /* webpackChunkName: "home-page" */
                )
              )}
            />
            <Route
              path="/movies"
              exact
              component={lazy(() =>
                import(
                  "./components/MoviesPage/moviesPage" /* webpackChunkName: "movies-page" */
                )
              )}
            />
            <Route
              path="/movies/:moviesId"
              component={lazy(() =>
                import(
                  "./components/MoviesDetails/moviesDetails" /* webpackChunkName: "movies-details" */
                )
              )}
            />
            <Route
              component={lazy(() =>
                import(
                  "./components/HomePage/homePage" /* webpackChunkName: home-page */
                )
              )}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}
