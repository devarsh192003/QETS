import React from "react";
import videoBg from '../videoBg.mp4'

const Main = () => {
    return (
        <div className="main">
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="contentM">
                <h1>Welcome</h1>
                <p>to my site</p>
            </div>
        </div>
    )
}

export default Main