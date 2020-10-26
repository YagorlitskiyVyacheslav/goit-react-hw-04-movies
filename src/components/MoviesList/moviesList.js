import React from 'react';
import MoviesListComponent from './moviesList.component';

const MoviesList = ({movies, location}) => {
    return (
      <>
          {movies.length > 0 && <MoviesListComponent>
            {movies.map((movie) => {
              return (
                <li key={movie.id}>
                  <MoviesListComponent.Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: location}
                    }}
                  >
                    {movie.name || movie.title}
                  </MoviesListComponent.Link>
                </li>
              );
            })}
          </MoviesListComponent>}
      </>
    );
}

export default MoviesList;