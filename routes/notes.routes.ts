import express, { Router } from "express";
import Note from "./../models/Note";
import User from "./../models/User";
import authMiddleware from "./../middleware/auth.middleware";
import mongoose from "mongoose";
import moment from "moment";
import e from "express";

const router = Router();

router.get(
    "/",
    authMiddleware,
    async (req: express.Request, res: express.Response) => {
        try {
            const userId: string = req.body.user;
            const notes: INote[] = (await Note.find({
                userId
            })) as INoteDocument[];
            const today = moment().format("DD.MM.YYYY");
            if (notes.length > 0) {
                const lastDate = notes[notes.length - 1].date;
                if (lastDate !== today) {
                    const newNote = await createNewNote(
                        { date: today, text: "", title: `${notes.length + 1}` },
                        userId
                    );
                    notes.push(newNote);
                }
            } else {
                const newNote = await createNewNote(
                    {
                        date: today,
                        text: "",
                        title: `Post #${notes.length + 1}`
                    },
                    userId
                );
                notes.push(newNote);
            }
            res.json({ notes });
        } catch (error) {
            res.status(500).send({ message: "Server error..." });
        }
    }
);

router.get("/lol", async (req, res) => {
    const notes = await notesByKeyword("похуй", "5e0e7f657c370819a0353226");
    res.status(200).json({
        message: "Export completet ;)",
        total: notes.length,
        notes
    });
});

export default router;
// !search by keyword
// {text: {"$regex": "пизда", "$options": "ig"}}

//// const removed = await Note.remove({ userId: "5e0f406724bce9099c9d1c3c" });
//// console.log(removed);

const notesByKeyword = async (keyword: string, userId: string) => {
    const notes = await Note.find({
        userId,
        text: { $regex: keyword, $options: "ig" }
    });
    return notes;
};

export interface INoteDocument extends mongoose.Document {
    title: string;
    text: string;
    date: string;
    files?: string[];
}
export interface INote {
    title: string;
    text: string;
    date: string;
    files?: string[];
}

const createNewNote = async (
    { date, text = "", title, files = [] }: INote,
    userId: string
) => {
    const note = new Note({
        title,
        text,
        date,
        files,
        userId
    });
    const newNote = (await note.save()) as INoteDocument;
    await User.updateOne({ _id: userId }, { $push: { notes: newNote._id } });
    return newNote;
};

// const save = async (posts: any) => {
//     for (let i = 0; i < posts.length; i++) {
//         const note = new Note({
//             title: posts[i].title,
//             text: posts[i].text,
//             date: posts[i].date,
//             files: [],
//             userId: "5e0e7f657c370819a0353226"
//         });
//         const newNote: any = await note.save();
//         console.log("TCL: p", newNote.title);
//         await User.updateOne(
//             { _id: "5e0e7f657c370819a0353226" },
//             { $push: { notes: newNote._id } }
//         );
//     }
// };
