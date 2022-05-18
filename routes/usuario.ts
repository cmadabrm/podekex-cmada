import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario, registrarUsuario } from '../controllers/usuarios';


const router = Router();


router.get('/',     getUsuarios );
router.get('/:idempleado',  getUsuario );

// router.post('/',    postUsuario );
router.post('/register',    registrarUsuario );
router.put('/:idempleado',     putUsuario );
// router.delete('/:idempleado',  deleteUsuario );



export default router;