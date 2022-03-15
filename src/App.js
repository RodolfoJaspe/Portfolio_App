import React from 'react';
import {Route, Link, Switch} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <div className="App-body">
                <header className="header"> 
                    <div className="header-nav">
                        <Link to="/">Home</Link>
                        <Link to= "/projects">Projects</Link>
                        <Link to="/about">About Me</Link>
                    </div>
                    <div className="h1-div">
                        <h1>RODOLFO JASPE</h1>
                        <div style={{color:"red",marginLeft:"2vw",fontSize:"4rem"}}>
                           <p>/</p> 
                        </div>
                        
                        <h2>Full Stack Web Developer</h2>
                    </div>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </main>
            </div>
        </div>
    );
}

export default App;
