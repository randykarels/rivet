import React, {useState, useEffect, useRef, useReducer} from 'react'
import Img from './img'
import NextButton from './next-button'
import Pickers from './pickers'


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

    const advance = () => {
        setPosition(findNextLoadedPosition(position));
    };

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

    const handlePickerClick = (newPosition) =>{
        setPosition(newPosition);
    };

    const renderImage = (src, i) => {
        return <Img key={i}
                    src={src}
                    isActive={(i === position) ? true : false}
                    />;
    };

    const countLoaded = Object.keys(loadedImages).length;
    const Next = (countLoaded > 2) ? <NextButton handleClick={advance} /> : null;
    
    return (
        <div className="slideshowContainer">
            <div className="controls">
                {Next}
                <Pickers images={images}
                         loadedImages={loadedImages}
                         handleClick={handlePickerClick}
                         position={position} />
            </div>

            <div className="images">
                {images.map((src, i) => renderImage(src, i))}
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

                div.controls {
                    position:absolute;
                    z-index: 100;
                }
            `}</style>
        </div>
    )
}

export default Slideshow;