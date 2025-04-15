import pool  from '../db.config';
import { GuineaPig } from '../models/GuineaPig';

const guineaPigDao = {
    getAllGuineaPigs: async (): Promise<GuineaPig[]> => {
      try {
        const { rows } = await pool.query('SELECT * FROM guinea_pigs');
        return rows;
      } catch (error) {
        throw new Error('Failed to fetch guinea pigs');
      }
    },
  
    getGuineaPigById: async (id: number): Promise<GuineaPig | null> => {
      try {
        const { rows } = await pool.query('SELECT * FROM guinea_pigs WHERE id = $1', [id]);
        return rows.length > 0 ? rows[0] : null;
      } catch (error) {
        throw new Error(`Failed to fetch guinea pig with id ${id}`);
      }
    },
  
    createGuineaPig: async (guineaPig: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig> => {
      try {
        const { rows } = await pool.query(
          'INSERT INTO guinea_pigs (name, breed, dob, approx_dob) VALUES ($1, $2, $3, $4) RETURNING *',
          [guineaPig.name, guineaPig.breed, guineaPig.dob, guineaPig.approxDob]
        );
        return rows[0];
      } catch (error) {
        throw new Error('Failed to create guinea pig');
      }
    },
  
    updateGuineaPig: async (id: number, guineaPig: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig | null> => {
      try {
        const { rows } = await pool.query(
          'UPDATE guinea_pigs SET name = $1, breed = $2, dob = $3, approx_dob = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
          [guineaPig.name, guineaPig.breed, guineaPig.dob, guineaPig.approxDob, id]
        );
        return rows.length > 0 ? rows[0] : null;
      } catch (error) {
        throw new Error(`Failed to update guinea pig with id ${id}`);
      }
    },
  
    deleteGuineaPig: async (id: number): Promise<boolean> => {
      try {
        const { rows } = await pool.query(
          'DELETE FROM guinea_pigs WHERE id = $1 RETURNING id',
          [id]
        );
        return rows.length > 0;
      } catch (error) {
        throw new Error(`Failed to delete guinea pig with id ${id}`);
      }
    },
  };
  
  export default guineaPigDao;