import React from 'react'


class Track extends React.Component {

    componentDidMount = (props) => {
        this.audio = new Audio;
        this.audio.setAttribute('preload', true);
        this.audio.setAttribute('src', this.props.src);
        this.audio.addEventListener('ended', this.handleEnded);
        this.audio.addEventListener('timeupdate', this.onTimeUpdate);
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.isPlaying) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    onTimeUpdate = () => {
        //sets the percentage
        const progress = ((this.audio.currentTime / this.audio.duration) * 100);
        console.log(`${progress}% done`);
    }

    handleClick = () => {
        if (this.props.isPlaying) {
            this.props.handlePause(this.props.src);
        } else {
            this.props.handlePlay(this.props.src);
        }
    }

    handleEnded = () => {
        this.props.handleEnded(this.props.src);
    }

    render = () => {
        let txt = "play";
        let borderColor = "transparent";
        let backgroundColor = "transparent";
        if (this.props.isPlaying) {
            txt = "pause";
            borderColor = "orange";
            backgroundColor = "orange";
        }
        return (
        <div onClick={this.handleClick}>
            {this.props.name} {txt}
            <style jsx>{`
                div {
                    padding: 1em;
                    font-family: Helvetica, san-serif;
                    background-color: ${backgroundColor};
                    border: 1px solid transparent;
                    border-color: ${borderColor};
                    color: 1px solid #777;
                }
                div:hover {
                    cursor: pointer;
                }
                `}</style>
        </div>
        )
    }
}


class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyPlaying: null,
        }
    }

    handlePlay = (src) => {
        this.setState({currentlyPlaying: src});
    }

    handlePause = (src) => {
        if (src == this.state.currentlyPlaying) {
            this.setState({currentlyPlaying: null});
        }
    }

    handleEnded = (src) => {
        if (src == this.state.currentlyPlaying) {
            this.setState({currentlyPlaying: null});
        }
    }

    renderTrack = (track, i) => {
        const isPlaying = track.src == this.state.currentlyPlaying;
        return <Track key={i}
                      name={track.name}
                      src={track.src}
                      isPlaying={isPlaying} 
                      handlePlay={this.handlePlay} 
                      handlePause={this.handlePause}
                      handleEnded={this.handleEnded} />
    }

    render = () => {
        return (
            <div>
                {this.props.tracks.map((track, i) => this.renderTrack(track, i))}
            </div>

        );
    }
}
export default Playlist;