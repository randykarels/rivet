import React  from 'react'

const BackgroundImg = ({src, isActive}) => (
    // TODO explore keyframes for fading animation?
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
            opacity: ${isActive ? 1 : 0};
            transition: opacity 0.5s ease-in-out;
            transition: background-image 0.5s ease-in-out;
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

export default BackgroundImg
