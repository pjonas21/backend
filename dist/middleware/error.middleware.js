"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(err, req, res, next) {
    const status = err.status ?? 500;
    const message = err.message ?? "Internal server error";
    res.status(status).json({
        message,
        status
    });
}
exports.errorMiddleware = errorMiddleware;
