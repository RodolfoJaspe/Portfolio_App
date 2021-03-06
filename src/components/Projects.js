import React from "react";
import { connect } from "react-redux";
import "./Projects.css";

function Projects ({skillsState}) {
    return (
        <div>
            <div className={skillsState?"projects-title-move":"projects-title"}>Projects
            </div>
            <div className="projects-outer">
                <div className="projects">                    
                    <iframe src ="https://hilites.netlify.app/" title="latest soccer highlights">
                    </iframe>
                    <a href="https://hilites.netlify.app/"><h3>Highlights</h3></a>
                    <p>Get the lates highlights from Europe's top three leagues: The English Premier League, The Spanish La Liga, and The Italian Serie A</p>
                </div>
                <div className="projects">        
                    <iframe src ="https://toodue.netlify.app/" title="latest soccer highlights"></iframe>
                    <a href="https://toodue.netlify.app/"><h3>To do list</h3></a>         
                    <p>Organize your day with this to-do list app</p>
                </div>
                <div className="projects">
                    <iframe src ="https://expat-journals.netlify.app/" title="latest soccer highlights"></iframe>
                    <a href="https://expat-journals.netlify.app/"><h3>Expat Journal</h3></a>
                    <p>Expats document through images their experiences while living abroad</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        skillsState: state.skillsState
    }
}

export default connect(mapStateToProps,{})(Projects)