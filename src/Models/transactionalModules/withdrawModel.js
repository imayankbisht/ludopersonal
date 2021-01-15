const mongoose = require("mongoose");

const withdrawlHistory = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true
    },
    channelId: {
      type: String,
      required: true
    },
    playerId: {
      type: String,
      required: true
    },
    withdrawAmount: {
      type: Number,
      cast: "withdrawAmount = {VALUE} is not a valid number",
      default: 0
    },
    gameStatus: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  },
  {
    optimisticConcurrency: true
  }
);

const WithdrawlHistory = mongoose.model("WithdrawlHistory", withdrawlHistory);

module.exports = WithdrawlHistory;
