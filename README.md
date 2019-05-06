# bt-challenge
![Travis Status](https://travis-ci.org/pfgallagher/bt-challenge.svg?branch=master)

Deployed on Heroku [here.](http://bt-challenge.herokuapp.com/)

## About
"A simple web page that searches Giphy and displays gifs."

## Features
* Three types of search:
  * Regular
  * Trending
  * Random
* Infinite scrolling.
* API calls are proxied through the back end to avoid exposing the API key.
* Fully responsive.
* Redux-stored search settings (language and content rating).
* Clicking a gif results in a modal with a full-sized version of the gif popping up.
* Scroll to top button that doubles as a loader.
* Tests (located at client/store/search.spec.js & server/api/search.spec.js).

## Libraries & Inspiration
* This project was bootstrapped using Fullstack Academy's [Boilermaker.](https://github.com/FullstackAcademy/boilermaker)
* Design inspiration and color theme was largely drawn from BT's style guide, _Margin_.

## Prerequisites
* node.js & npm
* A giphy API key

## Installation
1. `npm install`
2. Create an environment variable (or an entry in secrets.js) called `GIPHY_API_KEY`, and assign your API key to it.
3. `npm run start-dev`
4. Optional: `npm test` to run mocha tests.
