"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocationAreaEncounters = exports.getName = exports.getId = exports.getHeldItems = exports.getBaseExperience = exports.getAbilities = void 0;
const axios = require('axios').default;
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
const getAbilities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const abilities = data.abilities;
        return res.json(abilities);
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getAbilities = getAbilities;
const getBaseExperience = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const base_experience = data.base_experience;
        return res.json({ base_experience });
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getBaseExperience = getBaseExperience;
const getHeldItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const held_items = data.held_items;
        return res.json({ held_items });
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getHeldItems = getHeldItems;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const id = data.id;
        return res.json({ id });
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getId = getId;
const getName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const name = data.name;
        return res.json({ name });
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getName = getName;
const getLocationAreaEncounters = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pokemon_name } = req.params;
    yield axios.get(`${baseUrl}/${pokemon_name}`)
        .then(function (response) {
        const { data } = response;
        const location_area_encounters = data.location_area_encounters;
        return res.json({ location_area_encounters });
    })
        .catch(function (error) {
        console.log(error);
    });
});
exports.getLocationAreaEncounters = getLocationAreaEncounters;
//# sourceMappingURL=pokemon.js.map