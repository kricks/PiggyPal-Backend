import guineaPigDao from '../dao/guineaPigDao';
import { GuineaPig } from '../models/GuineaPig';
import { parseDate } from '../utilities/conversions';

const guineaPigService = {
  getAllGuineaPigs: async (): Promise<GuineaPig[]> => {
    return await guineaPigDao.getAllGuineaPigs();
  },

  getGuineaPigById: async (id: number): Promise<GuineaPig | null> => {
    return await guineaPigDao.getGuineaPigById(id);
  },

  createGuineaPig: async (data: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig> => {
    const preparedData = {
      ...data,
      dob: parseDate(data.dob),
      approx_dob: parseDate(data.approxDob),
    };
    return await guineaPigDao.createGuineaPig(preparedData);
  },

  updateGuineaPig: async (id: number, data: Omit<GuineaPig, 'id' | 'createdAt' | 'updatedAt'>): Promise<GuineaPig | null> => {
    const updatedData = {
      ...data,
      dob: parseDate(data.dob),
      approx_dob: parseDate(data.approxDob),
    }
    return await guineaPigDao.updateGuineaPig(id, updatedData);
  },

  deleteGuineaPig: async (id: number): Promise<boolean> => {
    return await guineaPigDao.deleteGuineaPig(id);
  },
};

export default guineaPigService;