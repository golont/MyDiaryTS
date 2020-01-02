import express from "express";
import path from "path";
import cors from "cors";

import t from "./routes/t";

const app: express.Application = express();

app.use(cors());
app.options("*", cors());

const PORT = process.env.PORT || 5000;

app.get("/api/bubilda", (req, res) => {
    res.json({
        message: `App starting on port ${PORT} ${t}`
    });
});

app.use("/", express.static(path.join(__dirname, "../", "client", "dist")));

app.get("*", (req, res) => {
    res.sendFile(
        path.resolve(__dirname, "../", "client", "dist", "index.html")
    );
});

app.listen(PORT, () => {
    console.log(`App starting on port ${PORT}`);
});
