// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

import express, { Request, Response } from 'express';
import path from 'path';
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import cors from 'cors';
import appRoutes from './src/routes/index.router';

export default async () => {
  const app = express();
  app.use(
    cors({
      origin: [/\localhost/],
    })
  );
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // api routes
  app.use('/pims/api', appRoutes);

  return app;
};
