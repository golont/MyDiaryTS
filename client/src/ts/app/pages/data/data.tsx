import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "Ts/redux/store/store";

interface Props {}

const DataPage: React.FC<Props> = () => {
    const { restTime } = useSelector((state: RootState) => state.timer);
    return (
        <section
            className="section section-data"
            style={{ display: "flex", justifyContent: "center" }}
        >
            {restTime}
        </section>
    );
};

export default DataPage;
