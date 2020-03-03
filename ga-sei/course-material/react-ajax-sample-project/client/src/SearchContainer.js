import React, { Component } from "react";
import { queryTVMazeAPI } from "./util.js";
import Results from './Results.js';
import Search from './Search.js';

class SearchContainer extends Component {
  state = {
    query: "",
    movies: [],
    hasSearched: false
  };

  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmitQuery = () => {
    //TODO: query for movies and set the hasSearched state to true
  }

  handleSearchAgain = () => {
    this.setState({
      movies: [],
      hasSearched: false,
      query: ''
    })
  }

  render() {
    return (
      <div>
        {
          this.state.hasSearched
            ?  <div>
                <button onClick={this.handleSearchAgain}>Search Again</button>
                <Results
                  movies={this.state.movies}
                />
              </div>
            : <Search
                query={this.state.query}
                handleInputChange={this.handleInputChange}
                handleSubmitQuery={this.handleSubmitQuery}
            />
        }
      </div>
    );
  }
}

export default SearchContainer;
