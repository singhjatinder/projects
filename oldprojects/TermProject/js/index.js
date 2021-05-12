var express = require('express');
var router = express.Router();

// other modules
var displayProduct 	= require("./displayProduct");
//New Product
var addProduct = require("./addProduct");
var saveProduct = require("./saveProduct");

//Edit Product
var editProduct = require("./editProduct");
var saveAfterEdit = require("./saveAfterEdit");

//Delete Product
var deleteProduct = require("./deleteProduct");
var deleteProductAfterConfirm = require("./deleteProductAfterConfirm");

//Search Product
var searchProduct = require("./searchProduct");

//Customers
var customers = require("./customers");
var searchCustomers = require("./searchCustomers");

var ordersForCustomer = require("./ordersForCustomer");

//Ordering Product
var orderProduct = require("./orderProduct");
var orderConfirm = require("./orderConfirm");

var viewOrder = require("./viewOrder");
var searchOrderProduct = require("./searchOrderProduct");

//Update and Delete Order
var updateOrder = require("./updateOrder");
var updateOrderAfterEdits = require("./updateOrderAfterEdits");
var deleteOrder = require("./deleteOrder");

var apiSearch = require("./apiSearch");

// router specs
router.get('/', function(req, res, next) {
  res.redirect('/products');
});
// Products - Admin View
router.get('/products', displayProduct);

router.get('/products/add', addProduct);
router.post('/products/add', saveProduct);

router.get('/products/edit/:id', editProduct);
router.post('/products/edit/', saveAfterEdit);

router.get('/products/delete/:id', deleteProduct);
router.post('/products/delete', deleteProductAfterConfirm);

router.post('/products/search', searchProduct);

// Customers
router.get('/customers', customers);
router.post('/customers/search', searchCustomers);

router.get('/customers/orders/:customerId', ordersForCustomer);

router.get('/viewOrder', viewOrder);

// Order Product
router.get('/order', orderProduct);
router.post('/order/confirm', orderConfirm);
router.post('/order/search', searchOrderProduct);

//Update and Delete Orders
router.get('/order/update/:orderId', updateOrder);
router.post('/order/update/', updateOrderAfterEdits);
router.get('/order/delete/:orderId', deleteOrder);

//API calls
router.get('/api/name/:name/from/:from/to/:to', apiSearch);

module.exports = router;
