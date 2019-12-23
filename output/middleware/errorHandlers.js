"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = __importStar(require("../utils/ErrorHandler"));
var handle404Error = function (router) {
    router.use(function (req, res) {
        ErrorHandler.notFoundError();
    });
};
var handleClientErrors = function (router) {
    router.use(function (err, req, res, next) {
        ErrorHandler.clientError(err, res, next);
    });
};
var handleServerErrors = function (router) {
    router.use(function (err, req, res, next) {
        ErrorHandler.serverError(err, res, next);
    });
};
exports.default = [handle404Error, handleClientErrors, handleServerErrors];
//# sourceMappingURL=errorHandlers.js.map