import bodyParser from "body-parser";
import config from "config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import auth from "./routes/auth.routes";
import time from "./routes/time.routes";

const PORT = process.env.PORT || 5000;
const app: express.Application = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

app.use("/api/auth", auth);
app.use("/api/", time);

const useStatic = () => {
    app.use("/", express.static(path.join(__dirname, "../", "client", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "client", "dist", "index.html")
        );
    });
    console.log("Using static files ...");
};

const start = async () => {
    try {
        await mongoose
            .connect(config.get("mongoUri"), {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            .then(() => {
                console.log("Successfully connected to database...");
            })
            .catch(e => {
                console.error(e.message);
            });
        app.listen(PORT, () => console.log(`App starting on port ${PORT}...`));
    } catch (error) {
        console.log("Server Error", error.message);
        process.exit(1);
    }
};

start();

if (process.env.NODE_ENV !== "development") {
    useStatic();
}
