"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("models/user/user.schema");
class UserService {
    constructor() {
        this.registerUser = async (email, password) => {
            const newUser = { email, password, accountState: 0 };
            const validatedUser = await user_schema_1.UserCollection.findOne({ email });
            if (!validatedUser) {
                const savedUser = await user_schema_1.UserCollection.create(newUser);
                return user_schema_1.mapUserToAttachedUser(savedUser);
            }
            else
                return undefined;
        };
        this.validateUser = async (user) => {
            const userToSearch = await user_schema_1.UserCollection.findOne({ email: user.email });
            if (!userToSearch) {
                return undefined;
            }
            else {
                if (userToSearch.password === user.password)
                    return user_schema_1.mapUserToAttachedUser(userToSearch);
                else
                    return undefined;
            }
            ;
        };
        this.accountRecharge = async (email, value) => {
            const updatedUser = await user_schema_1.UserCollection.findOneAndUpdate({ email }, { accountState: value });
            return user_schema_1.mapUserToAttachedUser(updatedUser);
        };
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map