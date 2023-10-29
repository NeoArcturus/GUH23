const express = require("express");
const router = express.Router();

const account = require("../../controllers/POST/account");
const transaction = require("../../controllers/POST/transaction");

router.use("/accounts", account);
router.use("/transaction", transaction);

module.exports = router;
