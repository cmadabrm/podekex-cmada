import { Request, response, Response } from "express";
const axios = require('axios').default;

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getAbilities = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const abilities = data.abilities;
        return res.json( abilities );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}

export const getBaseExperience = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const base_experience = data.base_experience;
        return res.json( {base_experience} );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}

export const getHeldItems = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const held_items = data.held_items;
        return res.json( {held_items} );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}

export const getId = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const id = data.id;
        return res.json( {id} );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}

export const getName = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const name = data.name;
        return res.json( {name} );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}

export const getLocationAreaEncounters = async ( req: Request, res: Response ) => {

    const { pokemon_name } = req.params;

    await axios.get(`${baseUrl}/${pokemon_name}`)
    .then(function (response:any) {
        const { data } = response;
        const location_area_encounters = data.location_area_encounters;
        return res.json( {location_area_encounters} );
    })
    .catch(function (error:any) {
        console.log(error);
    });
}