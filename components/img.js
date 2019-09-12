import React  from 'react'

const BackgroundImg = ({src}) => (
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
            height: 600px;
            background-color: transparent;
            background-image: url('${src}');
            background-position: center;
            background-size: cover;
            transition: background-image 0.5s ease-out;
        }
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
