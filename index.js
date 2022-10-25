const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/category.json");
const prices = require("./data/prices.json");

//this is home page by default
app.get("/", (req, res) => {
  res.send("BDIX VPS and VPN API running");
});

//this gives the list of catagory
app.get("/vpn-categories", (req, res) => {
  res.send(categories);
});

//this gives many newses based on categories
app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  const categroy_packs = prices.filter((n) => n.category_id === id);
  res.send(categroy_packs);
});

app.listen(port, () => {
  console.log("Bdix VPN server running on port", port);
});
