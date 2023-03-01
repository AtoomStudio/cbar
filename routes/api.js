import express from "express";
const router = express.Router();

/* API */
const api = [];

api.push(router.get("/", function (req, res, next) {
  res.send("api");
}));

api.push(router.get("/playerBalances.json.html", async function (req, res, next) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  res.send(`[
    {
      "typeId": 1,
      "name": "Efectivo",
      "amount": "17.33"
    },
    {
      "typeId": 8,
      "name": "Bonos de Casino",
      "amount": "108.0"
    },
    {
      "typeId": 43,
      "name": "Bonos de Apuestas",
      "amount": "0.0"
    },
    {
      "typeId": 45,
      "name": "Rake de Poker",
      "amount": "0.0"
    },
    {
      "typeId": "-1",
      "name": "total",
      "amount": "125.33"
    }
  ]`);
}));

export default api;