const express = require("express");
const jwt = require("../../middleware/jwt");
const account = require("../../middleware/account");
const router = express.Router();

router.get("/getAll", async (req, res) => {
  account.getAll(res);
});

router.get("/getById/:id", async (req, res) => {
  account.getAccountById(req.params.id, res);
});

module.exports = router;
