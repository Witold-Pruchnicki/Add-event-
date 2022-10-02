import simpleEventModel from "../models/event.js";

export const getEvents = async (req, res) => {
  try {
    const allEvents = await simpleEventModel.find();
    res.status(200).json(allEvents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createEvents = async (req, res) => {
  const simpleEvent = req.body;

  const newEvent = new simpleEventModel(simpleEvent);
  try {
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const deleteEvents = async (req, res) => {
  const id = req.params._id;

  try {
    await simpleEventModel.findByIdAndRemove(id).exec();
    res.send("Successfully Deleted");
  } catch (err) {
    console.log(err);
  }
};
