const productDB = require('../productDB.js');
const Product = productDB.getModel();

const customerDB = require('../customerDB.js');
const Customer = customerDB.getModel();

const orderDB = require('../ordersDB.js');
const Order = orderDB.getModel();

module.exports = async (req , res , next) => {

    let ids = req.body.id;
    let quantities = req.body.quantity;

    //convert it to a array if search results only had 1 output
    if(typeof quantities === "string"){
        quantitie = [quantities, 0];
        quantities = quantitie;
    }
    if(typeof ids === "string"){
        id = [ids, ""];
        ids = id;
    }
    //quantities.push(0); //to make sure it stays a array; otherwise, gets a TypeError

    let customers = await Customer.find({});
    let products = await Product.find({});
    let allCustomers = customers.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            email: emp.email
        }
    });

    let allproducts = products.map( emp => {
        return {
            id: emp._id,
            name: emp.name,
            description: emp.description,
            price: emp.price,
            quantity: emp.quantity
        }
    });

    // console.log(allCustomers[0].id);

    let orderedItems = [];
    let totalOrder = 0;

    //filter out what items are ordered
    quantities.forEach( (quantity, index) => {
        if(quantity != undefined && quantity > 0){
            let id = ids[index];
            let product = allproducts.find(p => p.id==id);
            let totalPrice = product.price * quantity;
            let eachOrderedProduct = {productID: product.id, productName: product.name, quantity: quantity, price: product.price, total: totalPrice};

            orderedItems.push(eachOrderedProduct);
            totalOrder += totalPrice;
        }
    });

    let validOrderItems = [];
    let invalidOrderedItems = [];
    //Check to see if there are any products ordered
    if(orderedItems.length > 0){
        // update quantity
        for (const eachProduct of orderedItems) {
            // let product = await Product.findById(eachProduct.productID);
            await Product.findById(eachProduct.productID, ( async (err, product) => {
                if (err) {
                    console.log("Error selecting: %s", err);
                }
                if(product.quantity >=  eachProduct.quantity){
                    validOrderItems.push(eachProduct);
                    product.quantity -= eachProduct.quantity;
                    product.save((err) => {
                        if (err) {
                            console.log("Error: %s", err);
                        }
                    });
                } else{
                    let invalidItem = {item: eachProduct, available: product.quantity};
                    invalidOrderedItems.push(invalidItem);
                    totalOrder -= eachProduct.total;
                }
            }));
        }

        let results = [];
        if(validOrderItems.length>0){
            let anotherOrder = new Order({
                customerID: allCustomers[0].id,
                products: validOrderItems,
                totalOrder: totalOrder
            });

            await Promise.all([
                anotherOrder.save()
            ]);
            results = [anotherOrder].map( emp => {
                return {
                    id: emp._id,
                    customerID: emp.customerID,
                    products: emp.products.map(emp => {
                        return{
                            id: emp._id,
                            productName: emp.productName,
                            quantity: emp.quantity,
                            price: emp.price.toFixed(2),
                            total: emp.total.toFixed(2)
                        }
                    }),
                    totalOrder: emp.totalOrder.toFixed(2),
                }
            });
        }
        res.render('customerOrderView',
            {title:"Customer/Buyer - Order Confirmed", data:results, invalidOrderData: invalidOrderedItems});
        //else send resent order page. (at least for now)
    } else {
        let products = await Product.find({});

        let results = products.map( emp => {
            return {
                id: emp._id,
                name: emp.name,
                description: emp.description,
                price: emp.price.toFixed(2),
                quantity: emp.quantity
            }
        });

        res.render('displayPlaceOrderView',
            {title:"Customer/Buyer - Place Order", data:results});
    }

};
