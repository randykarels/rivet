import React, { useState, useEffect } from 'react'
import Track from './track'


function Playlist ({tracks}) {
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    const handlePlay = (src) => {
        setCurrentlyPlaying(src);
    }

    const clearCurrentlyPlaying = (src) => {
        if (src == currentlyPlaying) {
            setCurrentlyPlaying(null);
        }
    }

    const renderTrack = (track, i) => {
        const isPlaying = track.src == currentlyPlaying;
        return <Track key={i}
                      name={track.name}
                      src={track.src}
                      isPlaying={isPlaying} 
                      handlePlay={handlePlay} 
                      handlePause={clearCurrentlyPlaying}
                      handleEnded={clearCurrentlyPlaying} />
    }

    return (
        <div>
            {tracks.map((track, i) => renderTrack(track, i))}
        </div>

    );
}
export default Playlist;