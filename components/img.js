import React  from 'react'

const BackgroundImg = ({src, isActive}) => (
    // TODO explore keyframes for fading animation?
    // FF has no transitions.
    // Safari flashes when moving to start of slideshow
    <div>
        <style jsx>{`
        div {
            width: 100%;
            position: absolute;
            display: table-cell;
            top:0;
            left: 0;
            height: 100%;
            background-color: #999;
            background-image: url('${src}');
            background-position: center;
            background-size: cover;
            opacity: ${isActive ? 1 : 0};
            transition: opacity 0.25s linear 0.1s; 
            // note: transition delay fixes flash on ff
    `}</style>
    </div>
)

const Img = ({src, isActive}) => (
    <div>
        <img src={src} />
        <style jsx>{`
        div {
            overflow: hidden;
            width: 100%;
            position: absolute;
            top:0;
            left: 0;
            height: 600px;
        }
        div img {
            width: 100%;
            opacity: ${isActive ? 1 : 0};
            transition: opacity 0.1s ease-out;
        }
    `}</style>
    </div>
)

export {BackgroundImg, Img}
