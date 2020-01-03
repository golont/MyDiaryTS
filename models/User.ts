import { Schema, model, Types } from "mongoose";

const schema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        notes: [{ type: Types.ObjectId, ref: "Note" }]
    },
    { timestamps: true }
);

export default model("User", schema);
