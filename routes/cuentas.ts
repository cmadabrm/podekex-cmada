import { Router } from "express";

import { getCuentas, getCuentaById, postCuenta, putCuenta, patchCuenta, deleteCuenta, tickets,paises } from '../controllers/cuentas';


const router = Router();

router.get('/cuentas/', getCuentas );
router.get('/cuentas/:id', getCuentaById );
router.post('/cuentas/', postCuenta );
router.put('/cuentas/:id', putCuenta );
router.patch('/cuentas/:id', patchCuenta );
router.delete('/cuentas/:id', deleteCuenta );


router.get('/paises/', paises );
router.get('/tickets/', tickets );

export default router;