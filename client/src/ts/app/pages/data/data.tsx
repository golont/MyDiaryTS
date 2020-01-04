import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "Ts/redux/store/store";
import Input from "Ts/components/input";
import { useInput } from "Ts/utils/input";
import { useDarkTheme } from "Ts/utils/useDark";
import Loader from "Ts/components/loader";
import Button from "Ts/components/button";

interface Props {}

const DataPage: React.FC<Props> = () => {
    const { restTime } = useSelector((state: RootState) => state.timer);
    const {
        loading,
        error,
        lastNote: note,
        totalNotes,
        previousNotes
    } = useSelector((state: RootState) => state.data);
    const title = useInput();
    const textarea = useInput();

    if (loading) {
        return <Loader />;
    }
    if (error) {
    }
    return (
        <section className="section section-data">
            <div className="note">
                <div className="note__header">
                    <div className="note__title">
                        <Input
                            placeholder={`Post #${totalNotes}`}
                            value={title}
                        />
                    </div>
                    <div className="note__date">{note.date}</div>
                </div>
                <div className="note__content">
                    <Input
                        value={textarea}
                        type="textarea"
                        className="textarea-note"
                    />
                </div>
                <div className="note__footer">
                    <div className="note__timer">{restTime}</div>
                    <Button>Save note</Button>
                </div>
            </div>

            {previousNotes.map(note => (
                <div className="note" key={note._id}>
                    <div className="note__header">
                        <div className="note__title">{note.title}</div>
                        <div className="note__date">{note.date}</div>
                    </div>
                    <div className="note__content">
                        <div className={useDarkTheme("textarea note__text")}>
                            {note.text}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DataPage;
