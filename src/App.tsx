import React from 'react';
import './App.css';
import {Header} from "./components/general/Header";
import {Menu} from "./components/general/Menu";
import {News} from "./components/news/News";
import {Route, Routes} from "react-router-dom";
import {SmallNews} from "./components/news/smallNews";
import {BigNews} from "./components/news/bigNews";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu/>
            <div className={"container"}>
            <Routes>
                    <Route path={'*'} element={<News/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default App;
