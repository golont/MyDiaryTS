import express from "express";
import path from "path";
import t from "./routes/t";

const app: express.Application = express();

const PORT = process.env.PORT || 5000;

app.get("/bubilda", (req, res) => {
    res.json({
        message: `App starting on port ${PORT}, NODE_ENV ${process.env.NODE_ENV} ${t}`
    });
});

console.log("TCL: process.env.NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
    console.log("PRODUCTION");
    app.use("/", express.static(path.join(__dirname, "../", "client", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../", "client", "dist", "index.html")
        );
    });
} else {
    console.log("DEVELOPMENT");
}

app.listen(80, () => {
    console.log(
        `App starting on port ${PORT}, NODE_ENV ${process.env.NODE_ENV}`
    );
});
