var unirest = require("unirest");

const createRandomTransaction = (id, quantity, response) => {
  unirest(
    "POST",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/" +
      id +
      "/create"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .send({ quantity: quantity })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.status(200).send(res.raw_body);
    });
};

const createCustomTransaction = (id, response) => {
  unirest(
    "POST",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/" +
      id +
      "/create"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .send({
      transactions: [{ amount: 1.23 }, { currency: "INR" }],
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.send(res.raw_body).status(200);
    });
};

const getAll = (id, response) => {
  unirest(
    "GET",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/" +
      id +
      "/transactions"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.status(200).send(res.raw_body);
    });
};

const getById = (id1, id2, response) => {
  unirest(
    "GET",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/transactions/accounts/" +
      id1 +
      "/transactions/" +
      id2
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.status(200).send(res.raw_body);
    });
};

const fraudulentTransaction = (id, fraudType, response) => {
  unirest(
    "POST",
    "https://sandbox.capitalone.co.uk/developer-services-platform-pr/api/data/fraud/transactions/accounts/" +
      id +
      "/create"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.CAPITAL_JWT,
      version: "1.0",
    })
    .send({ fraudType: fraudType })
    .end(function (res) {
      if (res.error) console.log(res.error);
      response.status(200).send(res.raw_body);
    });
};
module.exports = {
  createRandomTransaction,
  createCustomTransaction,
  getAll,
  getById,
  fraudulentTransaction,
};
