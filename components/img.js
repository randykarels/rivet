import React from 'react'


class Img extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isPreLoaded: false,
        };
        this.onload = this.onload.bind(this);
    }

    componentDidMount() {
        const img = new Image();
        img.onload = this.onload;
        img.src = this.props.src;
    }

    onload = function(){
        this.setState({isPreLoaded: true});
        console.log(`loaded! ${this.props.src}`);
    }

    render = () => {
        const imgStyle = {
            border: "1px solid yellow",
            width: "100%"
        }
        const img = <img src={this.props.src} style={imgStyle} />;
        return (
            <div>
                {this.state.isPreLoaded ? img : <p>loading</p>}
                <style jsx>{`
                div.img {
                    border: 1px solid green;
                    width: 100%;
                    overflow: hidden;
                }
            `}</style>
            </div>
    )}
}

export default Img
