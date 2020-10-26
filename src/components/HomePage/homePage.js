import React, { Component } from "react";
import { fetchTrendingMovies } from "../../fetchAPI/fetchMovies";
import MoviesList from "../MoviesList/moviesList";
import Section from "./homePage.component";


export default class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    fetchTrendingMovies().then((response) =>
      this.setState({ trendingMovies: response })
    );
  }
  render() {
    const { trendingMovies } = this.state;
    return (
      <Section>
        <h2>Trending Today</h2>
        <MoviesList movies={trendingMovies} location={this.props.location}/>
      </Section>
    );
  }
}