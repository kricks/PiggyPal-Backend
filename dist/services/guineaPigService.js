"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guineaPigDao_1 = __importDefault(require("../dao/guineaPigDao"));
const guineaPigService = {
    getAllGuineaPigs: async () => {
        return await guineaPigDao_1.default.getAllGuineaPigs();
    },
    getGuineaPigById: async (id) => {
        return await guineaPigDao_1.default.getGuineaPigById(id);
    },
    createGuineaPig: async (data) => {
        const preparedData = {
            ...data,
            dob: data.dob ? new Date(data.dob) : null,
        };
        return await guineaPigDao_1.default.createGuineaPig(preparedData);
    },
    updateGuineaPig: async (id, data) => {
        const updatedData = {
            ...data,
            dob: data.dob ? new Date(data.dob) : null,
        };
        return await guineaPigDao_1.default.updateGuineaPig(id, updatedData);
    },
    deleteGuineaPig: async (id) => {
        return await guineaPigDao_1.default.deleteGuineaPig(id);
    },
};
exports.default = guineaPigService;
//# sourceMappingURL=guineaPigService.js.map