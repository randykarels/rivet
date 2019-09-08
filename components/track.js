import React, { useEffect, useRef } from 'react'


const Track = ({name, src, isPlaying, handlePlay, handlePause, handleEnded}) => {

    const audioEl = useRef(null);

    useEffect(()=>{
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        //logs the percentage played
        const progress = ((audioEl.current.currentTime / audioEl.current.duration) * 100);
        console.log(`${progress}% done`);
    }

    const txt = isPlaying ? "pause" : "play";
    const klass = isPlaying ? "playing" : "paused";
    const handleClick = isPlaying ? handlePause : handlePlay;
    return (
    <div className={klass} onClick={() => handleClick(src)}>
        {name} {txt}
        <audio ref={audioEl}
               preload={true}
               src={src} 
               onEnded={()=>handleEnded(src)}
               onTimeUpdate={handleTimeUpdate}
               ></audio>
        <style jsx>{`
            div {
                padding: 1em;
                font-family: Helvetica, san-serif;
                background-color: transparent;
                border: 1px solid transparent;
                color: 1px solid #777;
            }
            div.playing {
                border-color: orange;
                background-color: orange;
            }
            div:hover {
                cursor: pointer;
            }
            `}</style>
    </div>
    )
}

export default Track;
