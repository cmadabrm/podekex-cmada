"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:idempleado', usuarios_1.getUsuario);
// router.post('/',    postUsuario );
router.post('/register', usuarios_1.registrarUsuario);
router.put('/:idempleado', usuarios_1.putUsuario);
// router.delete('/:idempleado',  deleteUsuario );
exports.default = router;
//# sourceMappingURL=usuario.js.map