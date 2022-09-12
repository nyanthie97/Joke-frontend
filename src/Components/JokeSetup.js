import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { firstLetterCase } from '../helpers';

export function JokeSetup({ jokeLoaded, showPunchline, jokeType, setup, handlePunchline }) {


  // once the tell me button has been clicked, be sure to hide it.
  // don't want to click again
  // could create components for showMeJoke and showTellMeButton