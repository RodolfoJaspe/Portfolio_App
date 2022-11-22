import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import headshot from "../Assets/2.0.jpg";
import About from "./About";
import "./Home.css"
import Projects from "./Projects";

function Home ({skillsState}) {
console.log(skillsState)
    const history = useHistory()
    return (
        <div className="home">
            <Projects />
            <About />
            <div className="img-and-app-row">
                {/* <div 
                    className={skillsState?"img-div-move":"img-div"} 
                    onClick={() => history.push('/about')}>
                       <img src= {headshot} alt="bridge" /> 
                </div> */}
                {/* <div className="projects-container">
                    <div className="home-projects">                    
                        <iframe src ="https://rdgroup-usa.com/" title="RD Group Consulting">
                        </iframe>
                        <a href="https://rdgroup-usa.com/">RD Group</a>
                    </div>
                    <div className="home-projects">                    
                        <iframe src ="https://dayanamorales.com" title="Dayana Morales Actress Portfolio">
                        </iframe>
                        <a href="https://dayanamorales.com">Dayana Morales<br/>Actress Portfolio</a>
                    </div>
                    <div className="home-projects">
                        <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>
                        <a href="https://toodue.netlify.app/">To do list</a>         
                    </div>
                </div> */}

            </div>      
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        skillsState: state.skillsState
    }
}

export default connect(mapStateToProps,{})(Home)