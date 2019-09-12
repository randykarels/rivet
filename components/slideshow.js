import React, {useState, useEffect, useRef, useReducer} from 'react'
import {Img, BackgroundImg} from './img'
import SlideshowControls from './slideshowControls'

// Returns copy of *imgs* with `src` added
const reducer = (imgs, src) => {
    const newImgs = {...imgs};
    newImgs[src] = true;
    return newImgs;
};

// custom hook returning current state of loaded images.
// loadedImages is an object in the form:
// {
//     src_1: true,
//     src_2: true,
// }
// where src_1 and src_2 are the urls of the preloaded images.
function usePreloadedImages (images) {
    // TODO: preload the first image first, then all other others
    const [loadedImages, dispatch] = useReducer(reducer, {})
    useEffect(()=>{
        images.map( (src) => {
            const img = new Image();
            img.onload = () => dispatch(src);
            img.src = src;
        });
    }, [images]);

    return loadedImages;
}

const Slideshow = ({images, width}) => {
    const [position, setPosition] = useState(0);
    const loadedImages = usePreloadedImages(images);

    // returns the position of the next loaded image
    function findNextLoadedPosition(i) {
        let nextPosition;
        if (i >= images.length - 1) {
            // last image. loop to start
            nextPosition = 0;
        } else {
            // advance to next
            nextPosition = i + 1;
        }

        // if the nextimage isn't loaded, then keep advancing until we
        // reach a loaded image.
        const nextSrc = images[nextPosition];
        if (loadedImages[nextSrc]) {
            return nextPosition;
        } else {
            return findNextLoadedPosition(i + 1);
        }
    }

    const handlePickerClick = (newPosition) => setPosition(newPosition);
    const handleNextClick = () => setPosition(findNextLoadedPosition(position));

    const renderImage = (src, i) => {
        return <Img key={i}
                    src={src}
                    isActive={(i === position) ? true : false}
                    />;
    };
    
    return (
        <div className="slideshowContainer">
            <SlideshowControls images={images}
                               loadedImages={loadedImages}
                               handleNextClick={handleNextClick}
                               handlePickerClick={handlePickerClick}
                               position={position} />
            
            <div className="images">
                {/* {images.map((src, i) => renderImage(src, i))} */}
                <BackgroundImg src={images[position]} />
            </div>

            <style jsx>{`
                div.slideshowContainer {
                    border: 1px solid red;
                    position: relative;
                    width:100%;
                    max-width:${width};
                    height: 600px;
                    background-color: transparent;
                };
            `}</style>
        </div>
    )
}

export default Slideshow;