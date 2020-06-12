import mongoose, { Document, Schema } from 'mongoose';

import { IUser, IUserAttached } from './user.model';

export const UserCollectionName = 'users';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountState: {
    type: Number,
    required: true
  },
});

export interface IUserDocument extends IUser, Document {};

export const UserCollection = mongoose.model<IUserDocument>(UserCollectionName, UserSchema);

export const mapUserToAttachedUser = (user: IUserDocument): IUserAttached => {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    accountState: user.accountState
  };
};