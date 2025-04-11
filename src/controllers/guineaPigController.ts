import { Request, Response } from 'express';
import guineaPigService from '../services/guineaPigService';

const guineaPigController = {
  getAllGuineaPigs: async (req: Request, res: Response): Promise<void> => {
    try {
      const pigs = await guineaPigService.getAllGuineaPigs();
      res.status(200).json(pigs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch guinea pigs' });
    }
  },

  getGuineaPigById: async (req: Request, res: Response): Promise<void> => {
    try {
      const pig = await guineaPigService.getGuineaPigById(Number(req.params.id));
      if (pig) {
        res.status(200).json(pig);
      } else {
        res.status(404).json({ message: 'Guinea pig not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch guinea pig' });
    }
  },

  createGuineaPig: async (req: Request, res: Response): Promise<void> => {
    try {
      const pig = await guineaPigService.createGuineaPig(req.body);
      res.status(201).json(pig);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create guinea pig' });
    }
  },

  updateGuineaPig: async (req: Request, res: Response): Promise<void> => {
    try {
      const pig = await guineaPigService.updateGuineaPig(Number(req.params.id), req.body);
      if (pig) {
        res.status(200).json(pig);
      } else {
        res.status(404).json({ message: 'Guinea pig not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update guinea pig' });
    }
  },

  deleteGuineaPig: async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await guineaPigService.deleteGuineaPig(Number(req.params.id));
      if (success) {
        res.status(200).json({ message: 'Guinea pig deleted' });
      } else {
        res.status(404).json({ message: 'Guinea pig not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete guinea pig' });
    }
  },
};

export default guineaPigController;