import guineaPigDao from '../dao/guineaPigDao';
import { GuineaPig } from '../models/GuineaPig';

const guineaPigService = {
  getAllGuineaPigs: async (): Promise<GuineaPig[]> => {
    return await guineaPigDao.getAllGuineaPigs();
  },

  getGuineaPigById: async (id: number): Promise<GuineaPig | null> => {
    return await guineaPigDao.getGuineaPigById(id);
  },

  createGuineaPig: async (data: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig> => {
    return await guineaPigDao.createGuineaPig(data);
  },

  updateGuineaPig: async (id: number, data: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig | null> => {
    return await guineaPigDao.updateGuineaPig(id, data);
  },

  deleteGuineaPig: async (id: number): Promise<boolean> => {
    return await guineaPigDao.deleteGuineaPig(id);
  },
};

export default guineaPigService;