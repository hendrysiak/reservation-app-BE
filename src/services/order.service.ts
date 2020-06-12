import { IFlight, IOrder, IOrderAttached } from 'models/orders/order.model';
import { mapOrderToAttachedOrder, OrdersCollection } from 'models/orders/order.schema';

class OrdersService {
  getSeatsPerDateHourDepartureAndDestination = async (
    flight: IFlight 
  ): Promise<IOrderAttached | undefined> => {
    const criteria = {
      departure: flight.departure,
      destination: flight.destination,
      date: flight.date,
      hour: flight.hour
    };
    const flightInfo = await OrdersCollection.findOne(criteria);
    return flightInfo ? mapOrderToAttachedOrder(flightInfo) : undefined;
  }; 

  saveFlightInfo = async (
    order: IOrder
  ): Promise<IOrderAttached | undefined> => {
    const criteria = {
      departure: order.departure,
      destination: order.destination,
      date: order.date,
      hour: order.hour
    };
    const flightInfo = await OrdersCollection.findOne(criteria);

    if (flightInfo) {
      const seats = [...flightInfo.seats, ...order.seats];
      await OrdersCollection.findOneAndUpdate({ id: flightInfo.id }, { seats });
    } else await OrdersCollection.create(order);
    return flightInfo ? mapOrderToAttachedOrder(flightInfo) : undefined;
  } 

}

export const ordersService = new OrdersService();