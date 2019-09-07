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

class BackgroundImg extends React.Component {

    componentDidMount() {
        checkImage(this.props.src).then( () => this.props.handleLoad(this.props.src));
    }

    render = () => {

        return (
            <div>
                <style jsx>{`
                div {
                    overflow: hidden;
                    width: 100%;
                    position: absolute;
                    top:0;
                    left: 0;
                    height: 600px;
                    background-color: black;
                    background-image: url('${this.props.src}');
                    background-position: center;
                    background-size: cover;
                    opacity: ${this.props.isActive ? 1 : 0};
                    transition: opacity 0.5s ease-in-out;
                }
                div img {
                    width: 100%;
                }
            `}</style>
            </div>
    )}
}


class Img extends React.Component {

    componentDidMount() {
        checkImage(this.props.src).then( () => this.props.handleLoad(this.props.src));
    }

    render = () => {
        return (
            <div>
                <img src={this.props.src} />
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
                    opacity: ${this.props.isActive ? 1 : 0};
                    transition: opacity 0.1s ease-out;
                }
            `}</style>
            </div>
    )}
}

export default Img
