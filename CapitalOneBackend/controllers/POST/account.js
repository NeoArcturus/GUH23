const express = require("express");
const jwt = require("../../middleware/jwt");
const account = require("../../middleware/account");
const router = express.Router();

router.post("/createRandomAccount", async (req, res) => {
  account.createRandomAccount(
    req.body.quant,
    req.body.transact,
    req.body.liveBal,
    res
  );
});

router.post("/createCustomAccount", async (req, res) => {
  account.createCustomAccount(req, res);
});

module.exports = router;
