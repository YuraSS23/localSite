import React from 'react';
import './App.css';
import {Header} from "./components/general/Header";
import {Menu} from "./components/general/Menu";
import {News} from "./components/news/News";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <div className={"container"}>
                <News />
            </div>
        </div>
    );
}

export default App;
