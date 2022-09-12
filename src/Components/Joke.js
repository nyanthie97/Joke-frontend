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
