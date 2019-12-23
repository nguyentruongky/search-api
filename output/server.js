"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
var utils_1 = require("./utils");
var middleware_1 = __importDefault(require("./middleware"));
var services_1 = __importDefault(require("./services"));
var errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
var router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
var server = http_1.default.createServer(router);
server.listen(PORT, function () {
    return console.log("Server is running http://localhost:" + PORT + "...");
});
process.on("uncaughtException", function (e) {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", function (e) {
    console.log(e);
    process.exit(1);
});
//# sourceMappingURL=server.js.map