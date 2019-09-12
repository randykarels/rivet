import React from 'react';
import NextButton from './next-button'
import Pickers from './pickers'


function SlideshowControls ({images, loadedImages, handleNextClick, handlePickerClick, position}) {
    const countLoaded = Object.keys(loadedImages).length;
    const Next = (countLoaded > 2) ? <NextButton handleClick={handleNextClick} /> : null;

    return (
        <div className="controls">
        {Next}
        <Pickers images={images}
                 loadedImages={loadedImages}
                 handleClick={handlePickerClick}
                 position={position} />
        <style jsx>{`
            div.controls {
                position:absolute;
                z-index: 100;
            }
        `}</style>
    </div>
    );
}

export default SlideshowControls;