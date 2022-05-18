"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuentas_1 = require("../controllers/cuentas");
const router = (0, express_1.Router)();
router.get('/cuentas/', cuentas_1.getCuentas);
router.get('/cuentas/:id', cuentas_1.getCuentaById);
router.post('/cuentas/', cuentas_1.postCuenta);
router.put('/cuentas/:id', cuentas_1.putCuenta);
router.patch('/cuentas/:id', cuentas_1.patchCuenta);
router.delete('/cuentas/:id', cuentas_1.deleteCuenta);
router.get('/paises/', cuentas_1.paises);
router.get('/tickets/', cuentas_1.tickets);
exports.default = router;
//# sourceMappingURL=cuentas.js.map