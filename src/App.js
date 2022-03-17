import React, {useState} from 'react';
import {Route, Link, Switch} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import FadeIn from 'react-fade-in';
import linkedIn from './Assets/linkedin.png'
import Header from './components/Header';

function App() {

    return (
        <div className="App">
            <div className="App-body">
                <Header />
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
