import React from 'react'

// create an utility function somewhere
const checkImage = path => (
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(path);
        img.onerror = () => reject();
        img.src = path;
    })
);

class Img extends React.Component {

    componentDidMount() {
        console.log(`componentDidMount: ${this.props.src}`);
        checkImage(this.props.src).then( () => this.props.handleLoad(this.props.src));
    }

    handleLoad = () => {
        //this.props.handleLoad(this.props.src);
    }

    render = () => {
        const activeStyle = {
            border: "2px solid yellow",
            opacity: 1,
        };
        const inactiveStyle = {
            border: "2px solid transparent",
            opacity: 0.25,
        };
        const imgStyle = this.props.isActive ? activeStyle : inactiveStyle;

        return (
            <div>
                <img src={this.props.src}
                     style={imgStyle} />
                <style jsx>{`
                div {
                    overflow: hidden;
                    width: 100%;
                }
                div img {
                    width: 100%;
                }
            `}</style>
            </div>
    )}
}

export default Img
