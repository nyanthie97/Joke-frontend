import React, { useState, useEffect } from 'react';
import Punchline from './Punchline';
import { getJoke } from './APICalls';
import { JokeSetup } from './JokeSetup';
import { Button } from 'reactstrap'

export function Joke() {
    const [jokeLoaded, setJokeLoaded] = useState(false);
    const [theJoke, setTheJoke] = useState({});
    const [showPunchline, setShowPunchline] = useState(false);
    const [error, setError] = useState(null);


 // flow notes
  // component load and should show "loading"
  // then call to get joke
  // handle the error also
  // when joke shows up, display JokeSetup with tellme button
  // click on tellme, tellme should go away and
  // punchline should show along with "get new joke"

  const handlePunchline = () => {
    setShowPunchline(true);
  }

  const handleGetAnother = () => {
    setJokeLoaded(false);
    setTheJoke({});
    setShowPunchline(false);
    setError(null)
    loadAnother();
  }


  const loadAnother = () => {
    getJoke()
      .then(response => {
        setTheJoke(response);
        setJokeLoaded(true);
      })
      .catch((error) => {
        // console.error("Error fetching data: ", error);
        setError(error);
      })
  }