import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './giflist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [ { id: "jxETRYAi2KReel7pqy" } ],
      selectedGifId: "jxETRYAi2KReel7pq",
    };
  }

  search = (query) => {
    giphy('tpLvoBYEc5za9QmcUWfi2cpmqL7GJrcL').search({
      q: query,
      limit: '10'
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  selectGif = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
