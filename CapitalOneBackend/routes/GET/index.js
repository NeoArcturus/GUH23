const express = require("express");
const router = express.Router();

const account = require("../../controllers/GET/account");
const transaction = require("../../controllers/GET/transaction");

router.use("/accounts", account);
router.use("/transaction", transaction);

module.exports = router;
