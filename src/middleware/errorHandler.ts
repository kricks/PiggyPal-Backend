import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // In production, don't leak error details
  const responseError = req.app.get('env') === 'development' ? err : {};

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  // Send a JSON response (or adjust if you want views in development)
  res.status(status).json({
    error: message,
    details: responseError,
  });
};