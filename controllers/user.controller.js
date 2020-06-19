"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("services/user.service");
exports.loggedIn = async (req, res) => {
    const user = { email: req.body.email, password: req.body.password };
    const validatedUser = await user_service_1.userService.validateUser(user);
    if (!validatedUser) {
        res.sendStatus(401);
        return;
    }
    else {
        delete validatedUser.password;
        res.send(validatedUser);
    }
};
exports.register = async (req, res) => {
    const newUser = await user_service_1.userService.registerUser(req.body.user.email, req.body.user.password);
    if (!newUser) {
        res.sendStatus(400);
        return;
    }
    else {
        res.send(newUser);
    }
};
exports.rechargeAccount = async (req, res) => {
    const updatedUser = await user_service_1.userService.accountRecharge(req.body.user.email, req.body.user.value);
    if (!updatedUser) {
        res.sendStatus(400);
        return;
    }
    else {
        delete updatedUser.password;
        res.send(updatedUser);
    }
};
//# sourceMappingURL=user.controller.js.map