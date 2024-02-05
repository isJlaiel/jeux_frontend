import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-page">
      <header className="header">
        <h1 className="main-title">Jeux de réflexion</h1>
        <p className="main-subtitle">Challenge your logic thinking skills by playing our logic games.</p>
      </header>
      <section className="content-section">
        <div className="content-block">
          <Link to="/alPacinoMovies" className="navLink">Movie Buffs Associated - Al Pacino (Logic Puzzle)
          </Link>
          <p className="block-text">Every week since its inauguration, the local Movie Buffs Associated have shown a series of movies chosen by a selection panel. Last week their choice was Al Pacino.</p>

        </div>
        <div className="content-block">
          <Link to="/newPersonalComputer" className="navLink">A New Personal Computer
          </Link>            <p className="block-text">With the help of the clues, could you figure out which computer has been chosen by Andrew?</p>

        </div>
        <div className="content-block">
          <Link to="/zebre" className="navLink">Pasta and Wine (Zebra Puzzle)
          </Link>
          <p className="block-text">The Zebra Puzzle is an very interesting type of logic puzzle. This puzzle was supposedly invented by Albert Einstein when he created the Einstein's Puzzle.</p>

        </div>
        <div className="content-block">
          <Link to="/firstStepPersonalizedPuzzle" className="navLink">Personnalize your puzzle
          </Link>
          <p className="block-text">Craft your personalized travel puzzle with just one click! Choose your destinations, assign unique modes of transportation, and experience a tailored adventure. Click here to start your envisioned getawa
          </p>

        </div>
      </section>
    </div>
  )
}

export default Home
