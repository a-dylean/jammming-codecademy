import React from "react";

import './MediaPlayer.css';

class MediaPlayer extends React.Component {

    componentDidUpdate(prevProps) {
        // if (this.props.trackId !== prevProps.trackId) {
        //     this.fetchData(this.props.track.id);
        // }
    }

    render() {
        return (
            <div className="MediaPlayer">
                <audio controls autoPlay={true} src={this.props.trackUrl} type="audio/mp3">
                </audio>
            </div>
        )
    }

}

export default MediaPlayer;
