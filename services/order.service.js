"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_schema_1 = require("models/orders/order.schema");
class OrdersService {
    constructor() {
        this.getSeatsPerDateHourDepartureAndDestination = async (flight) => {
            const criteria = {
                departure: flight.departure,
                destination: flight.destination,
                date: flight.date,
                hour: flight.hour
            };
            const flightInfo = await order_schema_1.OrdersCollection.findOne(criteria);
            return flightInfo ? order_schema_1.mapOrderToAttachedOrder(flightInfo) : undefined;
        };
        this.saveFlightInfo = async (order) => {
            const criteria = {
                departure: order.departure,
                destination: order.destination,
                date: order.date,
                hour: order.hour
            };
            const flightInfo = await order_schema_1.OrdersCollection.findOne(criteria);
            if (flightInfo) {
                console.log(flightInfo);
                const seats = [...flightInfo.seats, ...order.seats].map(seat => {
                    return { row: seat.row, seat: seat.seat };
                });
                console.log(seats);
                const updatedOrder = await order_schema_1.OrdersCollection.findByIdAndUpdate(flightInfo.id, { seats: seats });
                console.log(updatedOrder);
            }
            else
                await order_schema_1.OrdersCollection.create(order);
            return flightInfo ? order_schema_1.mapOrderToAttachedOrder(flightInfo) : undefined;
        };
    }
}
exports.ordersService = new OrdersService();
//# sourceMappingURL=order.service.js.map