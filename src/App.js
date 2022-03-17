import React from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Header from './components/Header';

function App() {

    return (
        <Router>
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
        </Router>
    );
}

export default App;
