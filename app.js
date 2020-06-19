"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routing_1 = require("./routing");
// const environment = process.env.NODE_ENV;
// dotenv.config({ path: path.join(__dirname,`${environment === 'development' ? '../.env.local' : '../.env'}`) });
dotenv.config({ path: path_1.default.join(__dirname, `${'../.env'}`) });
const app = express_1.default();
app.set('port', process.env.PORT || 3005);
app.use(cors_1.default());
// app.all('*', async (req, res, next) => {
//   await authService.validateTokenIfPresent(req);
//   next();
// });
//Mongo config
mongoose_1.default.connect(process.env.MONGODBURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connection.on('error', error => {
    // eslint-disable-next-line no-console
    console.error.bind(console, 'MongoDB connection error:' + error);
});
mongoose_1.default.set('useFindAndModify', false);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
routing_1.setupRoutes(app);
const httpServer = http.createServer(app);
httpServer.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('API listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map