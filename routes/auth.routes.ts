import bcryptjs from "bcryptjs";
import config from "config";
import { Router } from "express";
import jwt from "jsonwebtoken";
import User from "./../models/User";

const router = Router();
interface ISignup {
    email: string;
    username: string;
    phone: string;
    password: string;
}

export interface INote {
    _id?: string | number;
    title: string;
    text: string;
    date: string;
    files?: (string | File)[];
}

router.post("/signup", async (req, res) => {
    try {
        const body: ISignup = req.body;
        const { email, username, phone, password } = body;
        const newPhone = phone.match(/[0-9]+/g)[0];
        const candidate = await User.findOne({
            $or: [{ phone: newPhone }, { username }, { email }]
        });
        if (candidate) {
            return res
                .status(400)
                .json({ message: "User already exists", done: false });
        }
        const hashedPassword = await bcryptjs.hash(password, 5);
        const user = new User({
            email,
            username,
            password: hashedPassword,
            phone: newPhone
        });
        await user.save();
        res.status(201).json({
            message: "Signup done successfully",
            done: true
        });
    } catch (error) {
        res.status(500).json({ message: "Server error... " });
    }
});

interface ILogin {
    identifier: string;
    password: string;
}

interface IUser {
    _id?: string | number;
    username: string;
    email: string;
    phone: string;
    password: string;
    notes: INote[];
}

router.post("/login", async (req: { body: ILogin }, res) => {
    try {
        const { identifier, password } = req.body;
        const user: any = await User.findOne({
            $or: [
                { phone: identifier.replace(/[^0-9]/g, '') },
                { username: identifier },
                { email: identifier }
            ]
        });

        if (!user) {
            res.status(400).json({ message: "User not found", done: false });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ message: "Wrong password", done: false });
        }

        const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
            expiresIn: "1h"
        });

        res.json({ token, userId: user.id, done: true });
    } catch (error) {
        res.status(500).json({ message: "Server error... " });
    }
});

export default router;
