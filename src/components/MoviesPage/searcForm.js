import React, { Component } from 'react';
import SearchFormStyled from './searchForm.component';


export default class SearchForm extends Component {
  state = {
    inputValue: "",
  };
  onCangeHandler = (e) => {
      this.setState({inputValue: e.target.value})
  }
  onSubmitHandler = (e) => {
      e.preventDefault();

      this.props.onSubmit(this.state.inputValue);
      this.setState({inputValue: ''})
  }
  render() {
      const {inputValue} = this.state;
    return (
      <>
        <SearchFormStyled onSubmit={this.onSubmitHandler}>
          <input value={inputValue} placeholder='Enter a movie title' onChange={this.onCangeHandler} />
          <button type="submit">Find Movies</button>
        </SearchFormStyled>
      </>
    );
  }
}