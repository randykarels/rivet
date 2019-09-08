import React, { useEffect } from 'react'


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


// Note: this is currently not working
function TrackAsFunction ({src, name, handleEnded, handlePlay, handlePause, isPlaying}){
    let audio = null;

    useEffect(() => {
        console.log(`useEffect for setup with ${src}`)
        if (!src)
            return

        audio = new Audio;
        audio.setAttribute('preload', true);
        audio.setAttribute('src', src);
        audio.addEventListener('ended', ()=>handleEnded(src));
        audio.addEventListener('timeupdate', onTimeUpdate);
    }, [src]); 

    useEffect(() => {
        console.log(`useEffect for play/pause with ${audio} ${isPlaying}`)
        if (!audio)
            return

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const onTimeUpdate = () => {
        //sets the percentage
        const progress = ((audio.currentTime / audio.duration) * 100);
        console.log(`${progress}% done`);
    }

    const handleClick = () => {
        if (isPlaying) {
            handlePause(src);
        } else {
            handlePlay(src);
        }
    }


    let borderColor = "transparent";

    if (isPlaying) {
        borderColor = "orange";
    }
    return (
        <div onClick={handleClick}>
            {name} {isPlaying ? "pause" : "play"}
            <style jsx>{`
                div {
                    padding: 1em;
                    font-family: Helvetica, san-serif;
                    background-color: ${isPlaying ? "orange" : "transparent"};
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



export default Track;