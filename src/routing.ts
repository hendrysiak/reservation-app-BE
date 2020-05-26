import express from 'express';

export const setupRoutes = (app: express.Express): void => {
  app.get('/', (req, res) => res.send('Welcome to Swarmcheck API.'));

};