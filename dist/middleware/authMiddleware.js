"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || token !== 'Bearer sampletoken') {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    next();
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map