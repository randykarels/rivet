import React from 'react'
import Img from './img'
import NextButton from './next-button'
import Pickers from './pickers'

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
        const nextPosition = this.findNextLoadedPosition(this.state.position);
        this.setState({position: nextPosition});
    }

    findNextLoadedPosition = (i) => {
        let nextPosition;
        if (i >= this.props.images.length - 1) {
            // last image. loop to start
            nextPosition = 0;
        } else {
            // advance to next
            nextPosition = i + 1;
        }

        // if the nextimage isn't loaded, then keep advancing until we
        // reach a loaded image.
        if (this.state.loaded[this.props.images[nextPosition]]) {
            return nextPosition;
        } else {
            return this.findNextLoadedPosition(i + 1);
        }
    }

    countLoaded = () => Object.keys(this.state.loaded).length;

    handleLoad = (src) => {
        console.log(`loaded: ${src}`);
        const newLoaded = this.state.loaded;
        newLoaded[src] = true;
        this.setState({loaded: newLoaded});
    }

    handlePickerClick = (newPosition) => {
        this.setState({position: newPosition});
    }

    renderImage = (src, i) => {
        // wait until after the first image is loaded before
        // loading the rest of the images
        const isFirstImageLoaded = this.state.loaded[this.props.images[0]];
        if (i > 0 && !isFirstImageLoaded) {
            return
        }
        const isActive = (i === this.state.position) ? true : false;
        return <Img key={i}
                    src={src}
                    handleLoad={this.handleLoad}
                    isActive={isActive} />;
    }

    render = () => {
        const Next = (this.countLoaded() > 2) ? <NextButton handleClick={this.advance} /> : null;
        return (
        <div className="slideshowContainer">
            <div className="controls">
                {Next}
                <Pickers images={this.props.images}
                         loadedImages={this.state.loaded}
                         handleClick={this.handlePickerClick}
                         position={this.state.position} />

            </div>

            <div className="images">
                {this.props.images.map((src, i) => this.renderImage(src, i))}
            </div>


        <style jsx>{`
            div.slideshowContainer {
                border: 1px solid red;
                position: relative;
                width:100%;
                max-width:${this.props.width}px;
            };
            div.images {
                xwidth:${this.props.width}px;
                border:1px solid orange;
                position: relative;
            }
        `}</style>
        </div>
    )}
}

export default Slideshow;