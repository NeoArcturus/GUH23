const { response } = require("express");
var unirest = require("unirest");

const createRandomAccount = (
  quantity,
  numTransactions,
  liveBalance,
  response
) => {
  unirest(
    "POST",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .send({
      quantity: quantity,
      numTransactions: numTransactions,
      liveBalance: liveBalance,
    })
    .end(function (res) {
      if (res.error) {
        console.log(res.error);
        response.sendStatus(401);
      }
      response.status(200).send(res.raw_body);
    });
};

const createCustomAccount = (request, response) => {
  unirest(
    "POST",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/create"
  )
    .headers({
      "Content-Type": "application/json",
      Version: "1.0",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
    })
    .send({
      quantity: request.body.quantity,
      accounts: [
        {
          balance: request.body.balance,
          creditScore: request.body.creditScore,
          currencyCode: request.body.currenyCode,
          productType: request.body.productType,
          riskScore: request.body.riskScore,
          state: request.body.state,
          creditLimit: request.body.creditLimit,
        },
      ],
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.status(200).send(res.raw_body);
    });
};

const getAll = (response) => {
  unirest(
    "GET",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.send(res.raw_body).status(200);
    });
};

const getAccountById = (accountId, response) => {
  unirest(
    "GET",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/accounts/" +
      accountId
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.send(res.raw_body).status(200);
    });
};

module.exports = {
  createRandomAccount,
  createCustomAccount,
  getAll,
  getAccountById,
};
