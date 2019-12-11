import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
  {
    commonName: { type: String, required: true },
    class: { type: String, required: true },
    kgWeight: { type: Number, required: true },
    meterLength: { type: Number, required: true },
    planetId: { type: ObjectId, ref: 'planet', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species