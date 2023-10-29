const express = require("express");
const jwt = require("../../middleware/jwt");
const transaction = require("../../middleware/transaction");
const router = express.Router();

router.get("/getAll/account/:id", async (req, res) => {
  transaction.getAll(req.params.id, res);
});

router.get("/getById/account/:id1/transaction/:id2", async (req, res) => {
  transaction.getById(req.params.id1, req.params.id2, res);
});

module.exports = router;
