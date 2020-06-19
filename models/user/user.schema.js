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
exports.UserCollectionName = 'users';
const UserSchema = new mongoose_1.Schema({
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
;
exports.UserCollection = mongoose_1.default.model(exports.UserCollectionName, UserSchema);
exports.mapUserToAttachedUser = (user) => {
    return {
        id: user.id,
        email: user.email,
        password: user.password,
        accountState: user.accountState
    };
};
//# sourceMappingURL=user.schema.js.map