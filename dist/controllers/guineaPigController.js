"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const guineaPigService_1 = __importDefault(require("../services/guineaPigService"));
const guineaPigController = {
    getAllGuineaPigs: async (req, res) => {
        try {
            const pigs = await guineaPigService_1.default.getAllGuineaPigs();
            res.status(200).json(pigs);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch guinea pigs' });
        }
    },
    getGuineaPigById: async (req, res) => {
        try {
            const pig = await guineaPigService_1.default.getGuineaPigById(Number(req.params.id));
            if (pig) {
                res.status(200).json(pig);
            }
            else {
                res.status(404).json({ message: 'Guinea pig not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch guinea pig' });
        }
    },
    createGuineaPig: async (req, res) => {
        try {
            const pig = await guineaPigService_1.default.createGuineaPig(req.body);
            res.status(201).json(pig);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create guinea pig' });
        }
    },
    updateGuineaPig: async (req, res) => {
        try {
            const pig = await guineaPigService_1.default.updateGuineaPig(Number(req.params.id), req.body);
            if (pig) {
                res.status(200).json(pig);
            }
            else {
                res.status(404).json({ message: 'Guinea pig not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update guinea pig' });
        }
    },
    deleteGuineaPig: async (req, res) => {
        try {
            const success = await guineaPigService_1.default.deleteGuineaPig(Number(req.params.id));
            if (success) {
                res.status(200).json({ message: 'Guinea pig deleted' });
            }
            else {
                res.status(404).json({ message: 'Guinea pig not found' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete guinea pig' });
        }
    },
};
exports.default = guineaPigController;
//# sourceMappingURL=guineaPigController.js.map