const mongoose = require("mongoose");

const playerRefundHistory = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true
    },
    playerId: {
      type: String,
      required: true
    },
    amountRefunded: {
      type: Number,
      cast: "amountRefunded = {VALUE} is not a valid number",
      required: true
    },
    status: {
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

const RefundHistory = mongoose.model("RefundHistory", playerRefundHistory);

module.exports = RefundHistory;
