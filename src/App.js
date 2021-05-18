import React, { useState } from 'react';
import {Route, Link, Switch} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
    const [h1Position, setH1position] = useState({ 
        position: "initial"
});
    const moveH1 = () => {
        if (h1Position.position === "initial") {
            return setH1position({position: "right"})
        } else if (h1Position.position === "left") {
            return setH1position({position: "right"})
        } else {
            return setH1position({position: "left"})
        }
    }
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
                        <div onMouseEnter={moveH1} className={h1Position.position}>
                            <h1>Rodolfo Jaspe</h1>
                        </div>
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
