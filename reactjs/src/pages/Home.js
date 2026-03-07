import logo from '../logo.svg';
import React, { useEffect, useState } from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Students List Homepage</h1>
                <Link to='/dashboard'>Dashboard</Link>
                <ul>
                    <li>Students</li>
                </ul>
            </header>
        </div>
    );
}

export default Home;
