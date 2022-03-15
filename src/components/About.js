import React from "react";
import bridge from "../Assets/bridge.jpg";
import "./About.css"

function About () {
    return (
        <div>
            <div>
                <img src={bridge} alt="bridge"/>
            </div>
            <div className="bio">
                <p>
                    I am a full stack web developer mainly inclined towards front-end development. My specialties include Javascript, React, Redux, Node, Express, HTML, and CSS. 
                </p>
                <p>
                    For over ten years I've simultaneously trained and worked as an actor and a bartender. Both of these have provided me with very valuable soft skills easily transferable to almost any profession. I've worked in multiple teams and enjoy the process of creation and development from collective ideas.
                </p>
                <p>
                    When I'm not coding I'm usually on dad mode, improving my guitar skills, or supporting Manchester United.
                </p>
            </div>
        </div>
    )
}

export default About