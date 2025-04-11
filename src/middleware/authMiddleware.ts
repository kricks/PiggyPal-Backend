import { Request, Response, NextFunction, RequestHandler } from 'express';

const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token !== 'Bearer sampletoken') {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }
  next();
};

export default authMiddleware;