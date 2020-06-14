import { Request, Response } from 'express';

import { ordersService } from 'services/order.service';

export const getDisabledSeats = async (req: Request, res: Response): Promise<void> => {
  const flightInfo = await ordersService.getSeatsPerDateHourDepartureAndDestination(req.body.flight);
  if (!flightInfo) {
    res.send(null);
  } else {
    res.send(flightInfo);
  }

};
export const saveFlight = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body.order);
  const newOrder = await ordersService.saveFlightInfo(req.body.order);
  res.send(newOrder);
};
