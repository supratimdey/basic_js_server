const express = require("express");
const Order = require("./order");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

let orders = [];

//create a server object:

app.post("/orders", (req, res) => {
  let id = uuidv4();
  let name = req.body.name;
  let coffee = req.body.coffee;
  let total = parseFloat(req.body.total);
  let size = req.body.size;

  let order = new Order(id, name, coffee, total, size);

  orders.push(order);

  res.status(200).json({ sucess: true });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

const listener = app.listen(process.env.PORT, function () {
  console.log(" App is listining on port " + listener.address().port);
});
