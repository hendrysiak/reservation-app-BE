import mongoose, { Document, Schema } from 'mongoose';

import { IOrder, IOrderAttached } from './order.model';

export const OrdersCollectionName = 'orders';

const OrdersSchema = new Schema({
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

export interface IOrdersDocument extends IOrder, Document {};

export const OrdersCollection = mongoose.model<IOrdersDocument>(OrdersCollectionName, OrdersSchema);

export const mapOrderToAttachedOrder = (order: IOrdersDocument): IOrderAttached => {
  return {
    id: order.id,
    departure: order.departure,
    destination: order.destination,
    date: order.date,
    hour: order.hour,
    seats: order.seats
  };
};