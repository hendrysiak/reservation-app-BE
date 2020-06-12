import { IUserAttached } from 'models/user/user.model';
import { mapUserToAttachedUser, UserCollection } from 'models/user/user.schema';

class UserService {

  registerUser = async (email: string, password: string): Promise<IUserAttached | undefined> => {
    const newUser = { email, password, accountState: 0 };
    const validatedUser = await UserCollection.findOne({ email });
    if (!validatedUser) {
      const savedUser = await UserCollection.create(newUser);
      return mapUserToAttachedUser(savedUser);
    } else return undefined;
  };

  validateUser = async (user: {email: string; password: string}): Promise<IUserAttached | undefined> => {
    const userToSearch = await UserCollection.findOne({ email: user.email });
    if (!userToSearch) {
      return undefined;
    } else {
      if (userToSearch.password === user.password) return mapUserToAttachedUser(userToSearch);
      else return undefined;
    };
  };

  accountRecharge = async (email: string, value: number): Promise<IUserAttached | undefined> => {
    const updatedUser = await UserCollection.findOneAndUpdate({ email }, { accountState: value });
    return mapUserToAttachedUser(updatedUser);
  };
}

export const userService = new UserService();