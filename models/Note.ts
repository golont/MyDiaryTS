import { Schema, model, Types } from "mongoose";
import moment from "moment";

// id: string | number;
// title: string;
// text: string;
// date: string;
// files?: (File | string)[];
const schema = new Schema(
    {
        title: { type: String },
        text: { type: String },
        date: { type: String, default: moment().format("DD.MM.YYYY") },
        files: [{ type: Types.ObjectId, ref: "File" }],
        userId: { type: Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

export default model("Note", schema);
