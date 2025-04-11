"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guineaPigController_1 = __importDefault(require("../controllers/guineaPigController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const guineaPigValidation_1 = require("../validation/guineaPigValidation");
// Inline validation middleware using Joi
const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ errors: error.details });
            return; // Make sure there's no returned value here
        }
        next();
    };
};
const router = (0, express_1.Router)();
router.get('/', guineaPigController_1.default.getAllGuineaPigs);
router.get('/:id', guineaPigController_1.default.getGuineaPigById);
router.post('/create', authMiddleware_1.default, validate(guineaPigValidation_1.createGuineaPigSchema), guineaPigController_1.default.createGuineaPig);
router.put('/:id', authMiddleware_1.default, validate(guineaPigValidation_1.updateGuineaPigSchema), guineaPigController_1.default.updateGuineaPig);
router.delete('delete/:id', authMiddleware_1.default, guineaPigController_1.default.deleteGuineaPig);
exports.default = router;
//# sourceMappingURL=guinea-pigs.js.map