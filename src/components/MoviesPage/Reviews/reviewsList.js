import React, { Component } from 'react';
import {ReviewsListComponent} from './reviews.component';

export default class ReviewsList extends Component {
    render() {
        const {reviews} = this.props;
        
        return (
          <ReviewsListComponent>
            {reviews.map((review) => {
              return (
                <ReviewsListComponent.Item key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </ReviewsListComponent.Item>
              );
            })}
          </ReviewsListComponent>
        );
    }
}