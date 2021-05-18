import React from "react";
import bridge from "../Assets/bridge.jpg";
import "./Home.css"

function Home () {

    return (
        <div className="home">
            <div className="img-and-app-row">
                <div className="img-div">
                    <img src= {bridge} alt="bridge" />
                </div>
                <div>
                    <div className="home-projects">
                    <h3>
                        <a href="https://hilites.netlify.app/">HiLites App</a>
                    </h3>
                    <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights"></iframe>
                </div>
                <div className="home-projects">
                    <h3><a href="https://toodue.netlify.app/">TooDue App</a></h3>
                    <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>         
                </div>
                </div>
                
            </div>      
        </div>
    )
}

export default Home