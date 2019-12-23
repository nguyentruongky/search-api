"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var compression_1 = __importDefault(require("compression"));
exports.handleCors = function (router) { return router.use(cors_1.default({ credentials: true, origin: true })); };
exports.handleBodyRequestParsing = function (router) {
    router.use(body_parser_1.default.urlencoded({ extended: true }));
    router.use(body_parser_1.default.json());
};
exports.handleCompression = function (router) {
    router.use(compression_1.default());
};
//# sourceMappingURL=common.js.map