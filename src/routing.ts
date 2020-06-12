import express from 'express';

import * as userControllers from './controllers/user.controller';

export const setupRoutes = (app: express.Express): void => {
  app.get('/', (req, res) => res.send('Welcome to Reservation App API.'));

  app.post('/user/login', userControllers.loggedIn)
  app.post('/user', userControllers.register)
  app.put('/user', userControllers.rechargeAccount)
};