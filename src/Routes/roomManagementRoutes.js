const express = require("express");
const router = express.Router();
const Room = require("../Models/roomManagementModel");

//CREATE ROOM
router.post("/createroom", async (req, res) => {
  try {
    const { bet, rakePercent, rakeCap } = req.body;

    if (!bet || !rakePercent || !rakeCap)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    const totalPrize = (bet - rakeCap) * 2;
    const newRoom = new Room({
      bet,
      rakePercent,
      rakeCap,
      totalPrize
    });
    const savedRoom = await newRoom.save();
    console.log(savedRoom.bet);

    res.json(savedRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//GET ALL ROOM
router.get("/all", async (req, res) => {
  const rooms = await Room.find({});
  // rooms.map((room) => {
  //   let e = (room.bet - room.rakeCap) * 2;
  //   return rooms.push({ totalPrize: e });
  // });
  res.status(200).json(rooms);
});

//GET EDIT ROOM
router.get("/edit/:id", async (req, res) => {
  const loadRoom = await Room.find({
    _id: req.params.id
  });
  res.json({ loadRoom });
});

//EDIT ROOM
router.put("/edit/:id", async (req, res) => {
  const { room } = req.body;
  console.log(room);
  const loadRoom = await Room.updateMany(
    {
      _id: req.params.id
    },
    room
  );
  res.json({ loadRoom });
});

//DELETE ROOM
router.delete("/:id", async (req, res) => {
  const room = await Room.find({
    _id: req.params.id
  });
  console.log(room);
  if (!room)
    return res.status(400).json({
      msg: "No Room found with this ID."
    });
  const deletedRoom = await Room.deleteOne({
    _id: req.params.id
  });
  res.json(deletedRoom);
});

module.exports = router;
