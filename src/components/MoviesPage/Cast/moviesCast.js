import React, { Component } from "react";
import { fetchMoviesCast } from "../../../fetchAPI/fetchMovies";
import CastList from "./cast.component";


export default class Cast extends Component {
    state = {
        cast: []
    }
    componentDidMount() {
        fetchMoviesCast(this.props.match.params.moviesId)
        .then(response => {
            this.setState({cast: response})
        })
    }

    render() {
        const {cast} = this.state; 
        return (
        <>
            <CastList>
                {cast.map(item => {
                    return (
                      <CastList.Item key={item.id}>
                        <div>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                            alt={item.name}
                          />
                        </div>
                        <div>
                          <CastList.Name>{item.name}</CastList.Name>
                          <CastList.Character>{item.character}</CastList.Character>
                        </div>
                      </CastList.Item>
                    );
                })}
            </CastList>
        </>
        )
    }
}