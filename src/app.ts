import * as http from 'http';

import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import { setupRoutes } from './routing';

// const environment = process.env.NODE_ENV;

// dotenv.config({ path: path.join(__dirname,`${environment === 'development' ? '../.env.local' : '../.env'}`) });
dotenv.config({ path: path.join(__dirname,`${'../.env'}`) });


const app = express();

app.set('port', process.env.PORT || 3005);

app.use(cors());

// app.all('*', async (req, res, next) => {
//   await authService.validateTokenIfPresent(req);
//   next();
// });

//Mongo config
mongoose.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  // eslint-disable-next-line no-console
  console.error.bind(console, 'MongoDB connection error:' + error);
});

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
setupRoutes(app);

const httpServer = http.createServer(app);

httpServer.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('API listening on port ' + app.get('port'));
});
