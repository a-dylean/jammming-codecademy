import React from "react";
import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        const { tracks = [] } = this.props;
        return (
            <div className="TrackList">
                {
                    tracks.map((track) => {
                        return <Track 
                        track={track} 
                        key={track.id} 
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove} 
                        isRemoval={this.props.isRemoval} 
                        onPlay={this.props.onPlay}/>
                    })
                }
            </div>
        )
    }
}

export default TrackList;