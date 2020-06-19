"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ordersControllers = __importStar(require("./controllers/orders.controller"));
const userControllers = __importStar(require("./controllers/user.controller"));
exports.setupRoutes = (app) => {
    app.get('/', (req, res) => res.send('Welcome to Reservation App API.'));
    //user
    app.post('/user/login', userControllers.loggedIn);
    app.post('/user', userControllers.register);
    app.put('/user', userControllers.rechargeAccount);
    //order
    app.post('/orders', ordersControllers.getDisabledSeats);
    app.post('/orders/new', ordersControllers.saveFlight);
};
//# sourceMappingURL=routing.js.map