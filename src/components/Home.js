import React from "react";
import { useHistory } from "react-router-dom";
import headshot from "../Assets/headshot.jpeg";
import "./Home.css"

function Home () {

    const history = useHistory()
    return (
        <div className="home">
            <div className="img-and-app-row">
                <div className="img-div">
                    <div 
                        className="img-div2"
                        onClick={() => history.push('/about')} >
                       <img src= {headshot} alt="bridge" /> 
                    </div>
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