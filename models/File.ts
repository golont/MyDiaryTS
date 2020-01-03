import { Schema, model, Types } from "mongoose";

const schema = new Schema(
    {
        b64string: { type: String },
        note: { type: Types.ObjectId, ref: "Note" }
    },
    { timestamps: true }
);

export default model("File", schema);
