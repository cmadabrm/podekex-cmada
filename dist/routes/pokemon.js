"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_1 = require("../controllers/pokemon");
const router = (0, express_1.Router)();
router.get('/abilities/:pokemon_name', pokemon_1.getAbilities);
router.get('/base-experiences/:pokemon_name', pokemon_1.getBaseExperience);
router.get('/held-items/:pokemon_name', pokemon_1.getHeldItems);
router.get('/id/:pokemon_name', pokemon_1.getId);
router.get('/name/:pokemon_name', pokemon_1.getName);
router.get('/location-area-encounters/:pokemon_name', pokemon_1.getLocationAreaEncounters);
exports.default = router;
//# sourceMappingURL=pokemon.js.map