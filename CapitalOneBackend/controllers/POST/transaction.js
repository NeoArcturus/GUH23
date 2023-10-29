const express = require("express");
const jwt = require("../../middleware/jwt");
const transaction = require("../../middleware/transaction");
const router = express.Router();

router.post("/createRandomTransaction", async (req, res) => {
  transaction.createRandomTransaction(req.body.id, req.body.quantity, res);
});

router.post("/createCustomTransaction", async (req, res) => {
  transaction.createCustomTransaction(req.body.id, res);
});

router.post("/fraudTransaction", async (req, res) => {
  transaction.fraudulentTransaction(req.body.id, req.body.fraudType, res);
});

module.exports = router;
