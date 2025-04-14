import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import guineaPigController from '../controllers/guineaPigController';
import authMiddleware from '../middleware/authMiddleware';
import { createGuineaPigSchema, updateGuineaPigSchema } from '../validation/guineaPigValidation';

// Inline validation middleware using Joi
const validate = (schema: any): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({ errors: error.details });
      return; // Make sure there's no returned value here
    }
    next();
  };
};

const router = Router();

router.get('/', guineaPigController.getAllGuineaPigs);
router.get('/:id', guineaPigController.getGuineaPigById);
router.post('/create', authMiddleware, validate(createGuineaPigSchema), guineaPigController.createGuineaPig);
router.put('/:id', authMiddleware, validate(updateGuineaPigSchema), guineaPigController.updateGuineaPig);
router.delete('delete/:id', authMiddleware, guineaPigController.deleteGuineaPig);

export default router;