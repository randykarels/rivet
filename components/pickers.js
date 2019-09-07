import React from 'react'
import { generateKeyPair } from 'crypto';

const Picker = ({handleClick, isLoaded, isActive}) => {
    let css;
    let val;

    if (isLoaded) {
        const bc = isActive ? 'yellow' : 'green';
        css = {backgroundColor: bc}
        val = 'o'

    } else {
        css = {
            backgroundColor: 'grey',
            color: "darkgrey"
        }
        val = 'x';
        handleClick = null;
    }

    return (
        <div onClick={handleClick} style={css}>{val}

        <style jsx>{`
            div {
                display:inline-block;
                margin:0.25em;
                padding:0.5em;
            }
            div:hover {
                cursor: pointer;
            };
    `}</style>
        </div>
    )
}

const Pickers = ({images, loadedImages, handleClick, position}) => (
    <div>
    {images.map((src, i) => <Picker src={src}
                                    isLoaded={loadedImages[src]}
                                    isActive={i == position}
                                    handleClick={()=>handleClick(i)}/>)}
    </div>
)

export default Pickers;