const express = require("express");
const router = express.Router();
const { encrypt, auth } = require("../Middleware/middleware");

const BalanceSheet = require("../Models/balanceModel");

router.post("/balanceSheet", async (req, res) => {
  try {
    const {
      totalDepositChips,
      totalRakeDeducted,
      totalWithdrawlChips,
      totalRefundChips
    } = req.body;
    if (
      !totalDepositChips ||
      !totalRakeDeducted ||
      !totalWithdrawlChips ||
      !totalRefundChips
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newBalance = new BalanceSheet({
      totalDepositChips,
      totalRakeDeducted,
      totalWithdrawlChips,
      totalRefundChips
    });
    const savedBalance = await newBalance.save();
    console.log(savedBalance);
    res.json(savedBalance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/balanceSheet", auth, async (req, res) => {
  const response = await BalanceSheet.find({});
  const Response = await encrypt(response);
  res.status(200).json(Response);
});

module.exports = router;
