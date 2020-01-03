import service from "Ts/services/service";
import { ITimer } from "./state-interfaces";
import actions from "./actions";
import moment from "moment";

const timer = async () => {
    const time: ITimer = await service.getTime();
    actions.setTimerCount(time);
    let { restTime, todaysDate } = time;
    let interval = setInterval(() => {
        restTime = moment(restTime, "HH:mm:ss")
            .add(-1, "second")
            .format("HH:mm:ss")
            .toString();
        if (restTime === "00:00:00") {
            clearInterval(interval);
        }
        actions.setTimerCount({ todaysDate, restTime });
    }, 1000);
};

export default timer;
