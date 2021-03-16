const express = require('express');
const request = require('request');
var path = require('path')
const fetch = require('node-fetch')

const cors = 'https://api.themoviedb.org/3/'; //algemene link van de API
const key = 'ae3a232f0096c607ad590f0ec850e635'; //key van de API
const brba = "tv/1396"; //code voor breaking bad
const saul = "tv/60059"; //code voor better call saul
const season = "/season/"; // code voor seizoen 
const urlBrBa = `${cors}${brba}?api_key=${key}`; //samenvoegen van de link en key
const urlSaul = `${cors}${saul}?api_key=${key}`; //samenvoegen van de link en key

async function fetchDataBrBa(brba) {
    const fetch_response = await fetch(urlBrBa);
    const json = await fetch_response.json();
    console.log(json)
    console.log(urlBrBa)
    return json
};

async function fetchDataSaul(saul) {
    const fetch_response = await fetch(urlSaul);
    const json = await fetch_response.json();
    console.log(json)
    console.log(urlSaul)
    return json
};

async function fetchDataSeasonSaul(urlSeason) {
    const fetch_response = await fetch(urlSeason);
    const json = await fetch_response.json();
    console.log(json)
    console.log(urlSeason)
    return json
};



module.exports = {fetchDataBrBa, fetchDataSaul, fetchDataSeasonSaul}