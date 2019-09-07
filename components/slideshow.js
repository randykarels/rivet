import React from 'react'
import Img from './img'

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: {},
            position: 0,
        };
        this.handleLoad = this.handleLoad.bind(this);
    }

    advance = () => {
        let nextPosition;
        if (this.state.position == this.props.images.length - 1) {
            // last image. loop to start
            nextPosition = 0;
        } else {
            // advance to next
            nextPosition = this.state.position + 1;
        }
        this.setState({position: nextPosition});
    }
    handleLoad = (src) => {
        console.log(`loaded: ${src}`);
        const newLoaded = this.state.loaded;
        newLoaded[src] = true;
        this.setState({loaded: newLoaded});
    }

    renderImage = (src, i) => {
        // wait until after the first image is loaded before
        // loading the rest of the images
        const isFirstImageLoaded = this.state.loaded[this.props.images[0]];
        if (i > 0 && !isFirstImageLoaded) {
            return
        }
        const isActive = (i === this.state.position) ? true : false;
        return <Img key={i} src={src} handleLoad={this.handleLoad} isActive={isActive} />;
    }

    render = () => (
        <div className="slideshow">
            <div className="controls">
                <button onClick={this.advance}>next</button>
                <div className="picker">

                </div>
            </div>
            {this.props.images.map((src, i) => this.renderImage(src, i))}


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