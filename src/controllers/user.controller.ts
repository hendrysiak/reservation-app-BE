import { Request, Response } from 'express';

import { IUserAttached } from 'models/user/user.model';
import { userService } from 'services/user.service';

export const loggedIn = async (req: Request, res: Response): Promise<IUserAttached | undefined> => {
  const user = { email: req.body.email, password: req.body.password };
  const validatedUser = await userService.validateUser(user);
  if (!validatedUser) {
    res.sendStatus(401);
    return;
  } else {
    delete validatedUser.password;
    res.send(validatedUser);
  }

};
export const register = async (req: Request, res: Response): Promise<IUserAttached> => {
  const newUser = await userService.registerUser(req.body.user.email, req.body.user.password);
  if (!newUser) {
    res.sendStatus(400);
    return;
  } else {
    res.send(newUser);
  }
};

export const rechargeAccount = async (req: Request, res: Response): Promise<IUserAttached> => {
  const updatedUser = await userService.accountRecharge(req.body.user.email, req.body.user.value);
  if (!updatedUser) {
    res.sendStatus(400);
    return;
  } else {
    delete updatedUser.password;
    res.send(updatedUser);
  }
};