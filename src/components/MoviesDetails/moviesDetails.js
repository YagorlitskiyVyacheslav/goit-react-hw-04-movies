import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import { fetchCurrentMovies } from '../../fetchAPI/fetchMovies'
import Section from '../HomePage/homePage.component';
import Cast from '../MoviesPage/Cast/moviesCast';
import Reviews from '../MoviesPage/Reviews/moviesReviews';
import AdditionalInformation from './component/addInfo.js/additionalInfo';
import Button from './component/button/button';
import MoviesInfo from './component/MoviesInfo/moviesInfo';

export default class MoviesDeatails extends Component {
    state = {
        currentMovies: {}
    }
    componentDidMount() {
        fetchCurrentMovies(this.props.match.params.moviesId)
        .then(response => this.setState({currentMovies: response}))
    }
    onReturnHandler = () => {
      // console.log(this.props.location.state)
      if (this.props.location.state && this.props.location.state.from) {
        return this.props.history.push(this.props.location.state.from);
      }
      this.props.history.push('/movies')

    }
    render() {
        const {match} = this.props;
        if(Object.keys(this.state.currentMovies).length !== 0) {
            return (
              <Section>
                <Button onClick={this.onReturnHandler}/>
                <MoviesInfo currentMovies={this.state.currentMovies}/>
                <AdditionalInformation match={this.props.match}/>
                <Switch>
                  <Route path={`${match.path}/cast`} component={Cast} />
                  <Route path={`${match.path}/reviews`} component={Reviews} />
                </Switch>
              </Section>
            );
        } 
        return <></>
    }
}