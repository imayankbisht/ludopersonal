const mongoose = require("mongoose");

const balanceSheet = new mongoose.Schema(
  {
    totalDepositChips: {
      type: Number,
      cast: "totalDepositChips = {VALUE} is not a valid number",
      default: 0
    },
    totalRakeDeducted: {
      type: Number,
      cast: "totalRakeDeducted = {VALUE} is not a valid number",
      default: 0
    },
    totalWithdrawlChips: {
      type: Number,
      cast: "totalWithdrawlChips = {VALUE} is not a valid number",
      default: 0
    },
    totalRefundChips: {
      type: Number,
      cast: "totalRefundChips = {VALUE} is not a valid number",
      default: 0
    }
  },
  {
    optimisticConcurrency: true
  }
);

const BalanceSheet = mongoose.model("BalanceSheet", balanceSheet);

module.exports = BalanceSheet;
