"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_service_1 = require("services/order.service");
exports.getDisabledSeats = async (req, res) => {
    const flightInfo = await order_service_1.ordersService.getSeatsPerDateHourDepartureAndDestination(req.body.flight);
    if (!flightInfo) {
        res.send(null);
    }
    else {
        res.send(flightInfo);
    }
};
exports.saveFlight = async (req, res) => {
    console.log(req.body.order);
    const newOrder = await order_service_1.ordersService.saveFlightInfo(req.body.order);
    res.send(newOrder);
};
//# sourceMappingURL=orders.controller.js.map