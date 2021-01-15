const mongoose = require("mongoose");

const playerDepositHistory = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true
    },
    channelId: {
      type: String,
      required: false,
      default: null
    },
    playerId: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    amountDeposited: {
      type: Number,
      cast: "amountDeposited = {VALUE} is not a valid number",
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  {
    optimisticConcurrency: true
  }
);

const DepositHistory = mongoose.model("DepositHistory", playerDepositHistory);

module.exports = DepositHistory;
