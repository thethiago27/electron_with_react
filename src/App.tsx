import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./pages";
import {GlobalStyle} from "./assets/styles/Global";

function render() {
    ReactDOM.render(
        <>
            <HashRouter>
                {window.location.pathname.includes('index.html') && <Link to="/"/>}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </HashRouter>

            <GlobalStyle/>
        </>
        , document.body);
}

render();