import { IBaseModelAttached } from 'models/abstraction/base.interface';

export interface ISeats {
  row: string;
  seat: number;
}


export interface IFlight {
  date: string; 
  departure: string; 
  destination: string; 
  hour: string;
}

export interface IOrder extends IFlight{
  seats: ISeats[];
}

export type IOrderAttached = IOrder & IBaseModelAttached;