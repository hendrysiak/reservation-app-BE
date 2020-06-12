import { IBaseModelAttached } from 'models/abstraction/base.interface';

export interface IUser {
  email: string;
  password: string;
  accountState: number;
}

export type IUserAttached = IUser & IBaseModelAttached;