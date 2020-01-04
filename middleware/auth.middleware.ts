import jwt from "jsonwebtoken";
import config from "config";
import express from "express";

const authMiddleware = (
    req: any,
    res: express.Response,
    next: express.NextFunction
) => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const token = req.headers.auth;
        if (!token) {
            return res.status(403).json({ message: "No authentication" });
        }

        const decoded: any = jwt.verify(token, config.get("jwtSecret"));
        req.body.user = decoded.userId;
        next();
    } catch (error) {
        return res.status(403).json({ message: "No authentication" });
    }
};

export default authMiddleware;
