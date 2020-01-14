import React, { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import Button from "Ts/components/button";
import Input from "Ts/components/input";
import Loader from "Ts/components/loader";
import actions from "Ts/redux/actions";
import { RootState } from "Ts/redux/store/store";
import { useLang } from "Ts/utils/app";
import { useInput } from "Ts/utils/input";
import { useDarkTheme } from "Ts/utils/useDark";

interface Props {}

const DataPage: React.FC<Props> = () => {
    const { text } = useLang();
    const { restTime } = useSelector((state: RootState) => state.timer);
    const {
        loading,
        error,
        lastNote: note,
        totalNotes,
        previousNotes
    } = useSelector((state: RootState) => state.data);
    const title = useInput({ value: note.title });
    const textarea = useInput({ value: note.text });
    const classes = useDarkTheme("textarea note__text");


    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="error">Error</div>;
    }

    const onTitleChange = () => {
        actions.setLastNote({ title: title.value });
    };

    const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        actions.setLastNote({ text: textarea.value });
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <section className="section section-data">
            <div className="note note-today">
                <div className="note__header">
                    <div className="note__title">
                        <Input
                            onChange={onTitleChange}
                            className="input-title"
                            placeholder={`${text.inputs.note} #${totalNotes}`}
                            value={title}
                        />
                    </div>
                    <div className="note__date">{note.date}</div>
                </div>
                <div className="note__content">
                    <Input
                        onChange={onTextChange}
                        value={textarea}
                        type="textarea"
                        className="textarea-note"
                        placeholder={text.inputs.textarea}
                    />
                </div>
                <div className="note__footer">
                    <div className="note__timer">{restTime}</div>
                    <Button className="button-save">Save note</Button>
                </div>
            </div>
            {previousNotes.map(note => (
                <div className="note" key={note._id}>
                    <div className="note__header">
                        <div className="note__title">{note.title}</div>
                        <div className="note__date">{note.date}</div>
                    </div>
                    <div className="note__content">
                        <div className={classes}>{note.text}</div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DataPage;
