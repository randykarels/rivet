import React from 'react'


class Track extends React.Component {
    componentDidMount = () => {
        this.audio = new Audio;
    }

    render = () => {
        return (
        <div>
            track 1
            <button>play</button>
        </div>
        )
    }
}

export default Track;