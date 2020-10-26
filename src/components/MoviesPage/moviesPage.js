import React, { Component } from "react";
import { fetchMoviesByQuery } from "../../fetchAPI/fetchMovies";
import MoviesList from "../MoviesList/moviesList";
import SearchForm from "./searcForm";
import Section from '../HomePage/homePage.component';
import getQueryString from "../../untils/getQueryString";


export default class MoviesPage extends Component {
    state = {
        searchMovies: []
    }
    componentDidMount() {
        const {query} = getQueryString(this.props.location.search);
        if(query) {
            fetchMoviesByQuery(query).then((response) =>
              this.setState({ searchMovies: response })
            );
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const {query: prevQuery} = getQueryString(prevProps.location.search);
        const { query: nextQuery } = getQueryString(this.props.location.search);
        if(prevQuery !== nextQuery) {
          fetchMoviesByQuery(nextQuery)
          .then(response => this.setState({searchMovies: response}))
        }
    }
    onSubmitHandler = (searchValue) => {
        this.props.history.push({
          ...this.props.location,
          search: `query=${searchValue}`,
        });
    }

    render() {
        const {searchMovies} = this.state;
        return (
          <>
            <Section>
              <SearchForm onSubmit={this.onSubmitHandler} />
              <MoviesList
                movies={searchMovies}
                location={this.props.location}
              />
            </Section>
          </>
        );
    }
}