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
      console.log(flightInfo);
      const seats = [...flightInfo.seats, ...order.seats].map(seat => {
        return {row: seat.row, seat: seat.seat}
      });
      console.log(seats);
      const updatedOrder = await OrdersCollection.findByIdAndUpdate(flightInfo.id, { seats: seats });
      console.log(updatedOrder);
    } else await OrdersCollection.create(order);

    return flightInfo ? mapOrderToAttachedOrder(flightInfo) : undefined;
  } 

}

export const ordersService = new OrdersService();