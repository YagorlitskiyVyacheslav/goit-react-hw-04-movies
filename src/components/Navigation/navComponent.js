import React from "react";
import Header from "./navigation.component";

const NavigationComponent = () => {
    return (
      <Header>
        <nav>
          <Header.NavList>
            <li>
              <Header.NavLink exact to="/">Home</Header.NavLink>
            </li>
            <li>
              <Header.NavLink to="/movies">Movies</Header.NavLink>
            </li>
          </Header.NavList>
        </nav>
      </Header>
    )
}

export default NavigationComponent;