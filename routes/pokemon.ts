import { Router } from "express";
import { getAbilities, getBaseExperience, getHeldItems, getId, getName, getLocationAreaEncounters } from '../controllers/pokemon';


const router = Router();

router.get('/abilities/:pokemon_name', getAbilities );
router.get('/base-experiences/:pokemon_name', getBaseExperience );
router.get('/held-items/:pokemon_name', getHeldItems );
router.get('/id/:pokemon_name', getId );
router.get('/name/:pokemon_name', getName );
router.get('/location-area-encounters/:pokemon_name', getLocationAreaEncounters );

export default router;