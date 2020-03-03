import React, {Component} from 'react'
import SearchContainer from './SearchContainer.js'
import Favorites from './Favorites.js'
import './App.css'

class Home extends Component {
  state = { showFavorites: false };

  toggleShowFavorites = () => {
    let showFavorites = !this.state.showFavorites;
    this.setState({ showFavorites });
  }

  render() {
    return (
      <div className="App">
        <h1>TVMaze React</h1>
        <button onClick={this.toggleShowFavorites}>Show Favorites</button>
        { this.state.showFavorites
            ? <Favorites />
            : <SearchContainer />
        }
      </div>
    )
  }


}

export default Home
