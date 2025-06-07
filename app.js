import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/indexRouter.js';
import usersRouter from './routes/usersRouter.js';
import freezerRouter from './routes/freezerRouter.js';
import geladeiraRouter from './routes/geladeiraRouter.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Para usar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/freezer', freezerRouter);
app.use('/geladeira', geladeiraRouter);

// 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Erros
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// ✅ Export default para funcionar com import app from './app.js';
export default app;