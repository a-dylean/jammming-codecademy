import React from "react";
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.filterSearchResults = this.filterSearchResults.bind(this);
    }

    filterSearchResults() {
        this.props.searchResults.filter(track => track !== this.props.playlistTracks );
    
      }
      
    render() {
        return (
            <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults} 
            onAdd={this.props.onAdd}
            isRemoval={false}
            onPlay={this.props.onPlay}
            onFilter={this.filterSearchResults}/>
            </div>
        )
    }
}

export default SearchResults;