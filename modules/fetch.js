
const express = require('express');
const request = require('request');
var path = require('path')
const fetch = require('node-fetch')

async function fetchData(brba) {
    const api_url = 'https://api.themoviedb.org/3/tv/1396?api_key=ae3a232f0096c607ad590f0ec850e635';
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    console.log(json)
    console.log(api_url)
    return json
};

