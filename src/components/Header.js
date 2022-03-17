import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import FadeIn from 'react-fade-in';
import linkedIn from '../Assets/linkedin.png'
import { connect } from 'react-redux';
import { showSkills } from '../actions'

function Header({skillsState, showSkills}) {
    console.log("skillState:" + skillsState)

    return (
        <header> 
            <div className="header-nav">
                <Link to="/">Home</Link>
                <Link to= "/projects">Projects</Link>
                <Link to="/about">About Me</Link>
            </div>
            <div className="h1-div">
                <div className='name-title'>
                    <div className='name'>
                        <h1><b><>Rodolfo </><>Jaspe</></b></h1>
                    </div>
                    <div style={{color:"red",marginLeft:"2vw",fontSize:"6vw"}}>
                        /
                    </div>
                    <div className='title' onClick={()=>showSkills(skillsState)}>
                        <h2><b><>Full </><>Stack </><>Web </><>Developer</></b></h2>
                    </div>  
                </div>
                {skillsState? <FadeIn transitionDuration="1000" className='skills-container'>
                    <h2>{'{'}</h2>
                    <div className='skills-outer'>
                        <div className='skills-inner'>
                            <div className='skills-title'>front-end :</div>  <h4>[</h4> <p>'React'</p>, <p>'Redux'</p>, <p>'Context API'</p>, <p>'Yup'</p>, <p>'Axios'</p>, <p>'Javascript'</p>, <p>'HTML'</p>, <p>'CSS'</p>, <p>'Ant Design'</p> <h4>]</h4><h5>,</h5>
                        </div>
                        <br/>
                        <div className='skills-inner'>
                            <div className='skills-title'>back-end :</div>  <h4>[</h4> <p>'Node'</p>, <p>'Express'</p>, <p>'REST'</p>, <p>'Postman'</p>, <p>'Heroku'</p>, <p>'Helmet'</p>, <p>'CORS'</p>, <p>'SQL'</p>, <p>'Knex'</p>, <p>'bcryptjs'</p>, <p>'JWT'</p>, <p>'Jest'</p><h4>]</h4>
                        </div>
                    </div>
                    <h2>{'}'}</h2>
                </FadeIn> : 
                <div className='linkedin-icon'>
                    <a href='https://www.linkedin.com/in/rodolfo-jaspe/'>
                        <img src={linkedIn} alt='linkedin-icon'/> 
                    </a>
                </div>}
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        skillsState: state.skillsState
    }
}

export default connect(mapStateToProps, {showSkills})(Header)