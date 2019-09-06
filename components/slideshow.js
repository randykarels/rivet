import React from 'react'
import Img from './img'

class Slideshow extends React.Component {
    render = () => (
        <div className="slideshow">
            <button>prev</button>
            <button>next</button>
            {this.props.images.map((src, i) => <Img key={i} src={src} />)}


        <style jsx>{`
            div.slideshow {
                border: 1px solid red;
                position: relative;
                width:100%;
                max-width:${this.props.width}px;
            };
        `}</style>
        </div>
    )
}

export default Slideshow;