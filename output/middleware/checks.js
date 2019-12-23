"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = function (req, res, next) {
    if (!req.query.q) {
        throw new httpErrors_1.HTTP400Error("Missing q parameter");
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map