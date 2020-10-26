import React, { Component } from "react";
import { fetchMoviesReviews } from "../../../fetchAPI/fetchMovies";
import { NoReviews, ReviewsContainer } from "./reviews.component";
import ReviewsList from "./reviewsList";

export default class Reviews extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetchMoviesReviews(this.props.match.params.moviesId)
        .then(response => {
            console.log(response)
            this.setState({reviews: response})
        });
    }
    render() {
        const {reviews} = this.state
        return (
            <ReviewsContainer>
            {reviews.length > 0 && <ReviewsList reviews={reviews}/>}
            {reviews.length === 0 && <NoReviews>We don't have any reviews for this movie.</NoReviews>}
            </ReviewsContainer>
        )
    }
}