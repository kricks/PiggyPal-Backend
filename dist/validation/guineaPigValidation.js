"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGuineaPigSchema = exports.createGuineaPigSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const createGuineaPigSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required(),
    breed: joi_1.default.string().min(1).required(),
    dob: joi_1.default.number().integer().min(0).required(),
    approxDob: joi_1.default.number().integer().min(0).required(),
});
exports.createGuineaPigSchema = createGuineaPigSchema;
const updateGuineaPigSchema = joi_1.default.object({
    name: joi_1.default.string().min(1),
    breed: joi_1.default.string().min(1),
    dob: joi_1.default.number().integer().min(0),
    approxDob: joi_1.default.number().integer().min(0).required(),
}).min(1);
exports.updateGuineaPigSchema = updateGuineaPigSchema;
//# sourceMappingURL=guineaPigValidation.js.map