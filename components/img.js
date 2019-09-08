import React, { useEffect } from 'react'

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

export default Img
