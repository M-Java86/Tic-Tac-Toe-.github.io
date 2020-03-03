import React from 'react'
import { addFavoriteMovie } from './util.js'

export default class extends React.Component {

  addFavorite = () => {
    //TODO: add favorite movie
  }

  render() {
    return (
      <div className="result">
        <img src={this.props.movie.image ? this.props.movie.image.medium : 'https://via.placeholder.com/210x295'} alt={this.props.movie.name}/>
        <h2>{this.props.movie.name}</h2>
        <button onClick={this.addFavorite}>Favorite</button>
      </div>
    )
  }
}
