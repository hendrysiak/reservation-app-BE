"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.OrdersCollectionName = 'orders';
const OrdersSchema = new mongoose_1.Schema({
    departure: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    seats: {
        type: [{
                row: {
                    type: String,
                    required: true
                },
                seat: {
                    type: Number,
                    required: true
                },
            }],
        required: true
    },
});
;
exports.OrdersCollection = mongoose_1.default.model(exports.OrdersCollectionName, OrdersSchema);
exports.mapOrderToAttachedOrder = (order) => {
    return {
        id: order.id,
        departure: order.departure,
        destination: order.destination,
        date: order.date,
        hour: order.hour,
        seats: order.seats
    };
};
//# sourceMappingURL=order.schema.js.map