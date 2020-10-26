import React, {Component} from 'react';
import {MovieContainer, ImgContainer, MovieInfoContainer} from './movieInfo.component'

export default class MoviesInfo extends Component {
    render() {
        const {genres, overview, popularity, title, image} = this.props.currentMovies;
        return (
            <>
            <MovieContainer>
            <ImgContainer>
                  <img src={image} alt={title} />
                </ImgContainer>
                <MovieInfoContainer>
                  <h2>{title}</h2>
                  <p>User Score: {popularity}%</p>
                  <h3>Overview</h3>
                  <p>{overview}</p>
                  <h3>Genres</h3>
                  <MovieInfoContainer.GenresList>
                    {genres.map((genre) => {
                      return <li key={genre.id}>{genre.name}</li>;
                    })}
                  </MovieInfoContainer.GenresList>
                </MovieInfoContainer>
                </MovieContainer>
            </>
        )
    }
}