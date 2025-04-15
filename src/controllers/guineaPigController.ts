import { Request, Response, NextFunction } from 'express';
import guineaPigService from '../services/guineaPigService';

const guineaPigController = {
  getAllGuineaPigs: async (req: Request, res: Response): Promise<void> => {
    try {
      const pigs = await guineaPigService.getAllGuineaPigs();
      res.status(200).json(pigs);
    } catch (error: unknown) {
      next(error);
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
      next(error);
    }
  },

  createGuineaPig: async (req: Request, res: Response): Promise<void> => {
    try {
      const pig = await guineaPigService.createGuineaPig(req.body);
      res.status(201).json(pig);
    } catch (error) {
      next(error);
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
      next(error);
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
      next(error);
    }
  },
};

export default guineaPigController;

function next(error: unknown) {
  throw new Error('Function not implemented.');
}
