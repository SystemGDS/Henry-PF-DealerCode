"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * https://localhost:3000/[GET]
 */
router.get('/', (_req, res) => {
    res.send('Feching all entry APIS!!!');
});
router.get('/:id', (_req, res) => {
    res.send('Feching all entry APIS!!!');
});
router.post('/', (_req, res) => {
    res.send('Create all entry APIS!!!');
});
router.put('/:id', (_req, res) => {
    res.send("Update User!!!");
});
router.delete('/:id', (_req, res) => {
    res.send('Delete User For :ID!!!');
});
exports.default = router;
