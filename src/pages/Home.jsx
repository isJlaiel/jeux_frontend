import React from 'react'
import {  Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <nav>
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/alPacinoMovies" className="navLink">Movie Buffs Associated - Al Pacino (Logic Puzzle)
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/newPersonalComputer"  className="navLink">A New Personal Computer Logic Puzzle
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/zebre"  className="navLink">Pasta and Wine (Zebra Puzzle)
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Home
