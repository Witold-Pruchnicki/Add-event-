import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  date: String,
});

const simpleEventModel = mongoose.model("event", eventSchema);

export default simpleEventModel;
