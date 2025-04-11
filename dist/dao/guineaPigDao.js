"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("../db.config"));
const guineaPigDao = {
    getAllGuineaPigs: async () => {
        try {
            const { rows } = await db_config_1.default.query('SELECT * FROM guinea_pigs');
            return rows;
        }
        catch (error) {
            throw new Error('Failed to fetch guinea pigs');
        }
    },
    getGuineaPigById: async (id) => {
        try {
            const { rows } = await db_config_1.default.query('SELECT * FROM guinea_pigs WHERE id = $1', [id]);
            return rows.length > 0 ? rows[0] : null;
        }
        catch (error) {
            throw new Error(`Failed to fetch guinea pig with id ${id}`);
        }
    },
    createGuineaPig: async (guineaPig) => {
        try {
            const { rows } = await db_config_1.default.query('INSERT INTO guinea_pigs (name, breed, age) VALUES ($1, $2, $3) RETURNING *', [guineaPig.name, guineaPig.breed, guineaPig.dob, guineaPig.apprxDob]);
            return rows[0];
        }
        catch (error) {
            throw new Error('Failed to create guinea pig');
        }
    },
    updateGuineaPig: async (id, guineaPig) => {
        try {
            const { rows } = await db_config_1.default.query('UPDATE guinea_pigs SET name = $1, breed = $2, age = $3, updated_at = NOW() WHERE id = $4 RETURNING *', [guineaPig.name, guineaPig.breed, guineaPig.dob, guineaPig.apprxDob, id]);
            return rows.length > 0 ? rows[0] : null;
        }
        catch (error) {
            throw new Error(`Failed to update guinea pig with id ${id}`);
        }
    },
    deleteGuineaPig: async (id) => {
        try {
            const { rows } = await db_config_1.default.query('DELETE FROM guinea_pigs WHERE id = $1 RETURNING id', [id]);
            return rows.length > 0;
        }
        catch (error) {
            throw new Error(`Failed to delete guinea pig with id ${id}`);
        }
    },
};
exports.default = guineaPigDao;
//# sourceMappingURL=guineaPigDao.js.map