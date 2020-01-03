import { Router } from "express";
import moment from "moment";

const router = Router();

router.get("/time", (req, res) => {
    const now = moment();
    const endOfDay = moment().endOf("day");
    const duration = moment.duration(endOfDay.diff(now));
    res.send({
        todaysDate: moment().format("YYYY-MM-DD"),
        restTime: moment.utc(duration.as("milliseconds")).format("HH:mm:ss")
    });
});

export default router;
