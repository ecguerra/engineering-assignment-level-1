const express = require("express")
const cors = require("cors")
const products = require("./data-prices.json")
const productDetails = require("./data-details.json")

const PORT = 5000
const app = express()


app.get("/api/v1/products", cors(), (req, res) => {
  // Send back the `products` object.
  res.send(products)
})

app.get("/api/v1/product/:id", cors(), (req, res) => {
  // Send back the `productDetails` object corresponding to
  // the passed in `id` query parameter.
  const prodDetailArr = Object.values(productDetails)

  res.send(prodDetailArr.filter(product => product.id === req.params.id))

})

app.listen(PORT, () => `Server running on port ${PORT}`)
