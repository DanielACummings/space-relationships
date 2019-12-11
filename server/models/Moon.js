import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Moon = new Schema(
  {
    name: { type: String, required: true },
    kmWidth: { type: Number, required: true },
    starId: { type: ObjectId, ref: 'star', required: true },
    planetId: { type: ObjectId, ref: 'planet', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Moon