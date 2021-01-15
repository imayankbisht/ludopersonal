const express = require("express");
const router = express.Router();
const DepositHistory = require("../Models/transactionalModules/depositModel");
const RefundHistory = require("../Models/transactionalModules/refundModel");
const RakeHistory = require("../Models/transactionalModules/rakeModel");
const WithdrawlHistory = require("../Models/transactionalModules/withdrawModel");

router.post("/depositHistory", async (req, res) => {
  try {
    const {
      roomId,
      channelId,
      playerId,
      userName,
      status,
      amountDeposited,
      time
    } = req.body;
    if (
      !roomId ||
      !playerId ||
      !userName ||
      !status ||
      !amountDeposited ||
      !time
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newDeposit = new DepositHistory({
      roomId,
      channelId,
      playerId,
      userName,
      status,
      amountDeposited,
      time
    });
    const savedDeposit = await newDeposit.save();
    console.log(savedDeposit);
    res.json(savedDeposit);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//playerrefundHistory
router.post("/refundHistory", async (req, res) => {
  try {
    const {
      roomId,
      // channelId,
      playerId,
      userName,
      status,
      amountRefunded,
      time
    } = req.body;
    if (
      !roomId ||
      !playerId ||
      !userName ||
      !status ||
      !amountRefunded ||
      !time
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newRefund = new RefundHistory({
      roomId,
      // channelId,
      playerId,
      userName,
      status,
      amountRefunded,
      time
    });
    const savedRefund = await newRefund.save();
    console.log(savedRefund);
    res.json(savedRefund);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//rakeHistory
router.post("/rakeHistory", async (req, res) => {
  try {
    console.log(req.body);
    const {
      roomId,
      channelId,
      playerId,
      winnerId,
      winnerName,
      username,
      totalBetAmount,
      rakeAmount,
      startTime,
      endTime
    } = req.body;
    if (
      !roomId ||
      !channelId ||
      !playerId ||
      !winnerId ||
      !winnerName ||
      !username ||
      !totalBetAmount ||
      !rakeAmount ||
      !startTime ||
      !endTime
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newRake = new RakeHistory({
      roomId,
      channelId,
      playerId,
      username,
      winnerId,
      winnerName,
      totalBetAmount,
      rakeAmount,
      startTime,
      endTime
    });
    const savedRake = await newRake.save();
    console.log(savedRake);
    res.json(savedRake);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// WithdrawlHistory
router.post("/withdrawlHistory", async (req, res) => {
  try {
    const {
      roomId,
      channelId,
      playerId,
      userName,
      gameStatus,
      withdrawAmount,
      time
    } = req.body;
    if (
      !roomId ||
      !playerId ||
      !userName ||
      !gameStatus ||
      !withdrawAmount ||
      !time
    )
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newWithdraw = new WithdrawlHistory({
      roomId,
      channelId,
      playerId,
      userName,
      gameStatus,
      withdrawAmount,
      time
    });
    const savedWithdraw = await newWithdraw.save();
    console.log(savedWithdraw);
    res.json(savedWithdraw);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
