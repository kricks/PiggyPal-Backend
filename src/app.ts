import createError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
// Import your router (make sure the router file is converted to TS too)
import guineaPigRouter from './routes/guinea-pigs';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/guinea-pigs', guineaPigRouter);
app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to PiggyPal Backend! hello');
});

// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// Centralized error handling middleware (registered as the last middleware)
app.use(errorHandler);

export default app;