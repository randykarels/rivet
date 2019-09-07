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
        checkImage(this.props.src).then( () => this.props.handleLoad(this.props.src));
    }

    render = () => {
        const activeStyle = {
            opacity: 1,
        };
        const inactiveStyle = {
            opacity: 0,
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
                    position: absolute;
                    top:0;
                    left: 0;
                }
                div img {
                    width: 100%;
                }
            `}</style>
            </div>
    )}
}

export default Img
