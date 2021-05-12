const ProductDB = require('./userDB.js');

const Product = ProductDB.getModel();


(async() => {

	await Product.deleteMany({});

	// Add Some product
	let product1 = new Product({
		fName: 'Jay',
		lName: 'Singh',
		pwd: '123456',
		email: 'singhjay269@gmail.com'
	}); 

	// let product2 = new Product({
	// 	name: 'HS Shampoo 24oz',
	// 	description: 'Head and Shoulders 24oz bottle',
	// 	price: '6.50',
	// 	quantity: 'f100'
	// });
	//
	// let product3 = new Product({
	// 	name: 'Nest Learning Thermostat',
	// 	description: 'Meet the 3rd gen Nest Learning Thermostat. It\'s slimmer and sleeker with a bigger, sharper display. And it saves energy. That\'s the most beautiful part. Your thermostat controls half your energy bill - more than appliances, more than electronics. So shouldn\'t it help you save energy? The 3rd gen Nest Learning Thermostat does. It learns what temperature you like and builds a schedule around yours.',
	// 	price: '219.00',
	// 	quantity: '75'
	// });
	//
	// //Add Some Customers
	// let customer1 = new Customer({
	// 	name: 'Jatinder',
	// 	email: 'singhjay269@gmail.com'
	// });
	//
	// let customer2 = new Customer({
	// 	name: 'Suresh',
	// 	email: 'kalathur@bu.edu'
	// });
	//
	// let customer3 = new Customer({
	// 	name: 'Fazil',
	// 	email: 'fazilh@bu.edu'
	// });
	//
	// //Add Some orders
	// let order1 = new Order({
	// 	customerID: customer1._id,
	// 	products: [{productID: product2._id, productName: 'HS Shampoo 24oz', quantity: '2', price:'6.50', total: '13.00'},
	// 		{productID: product1._id, productName: 'Lenovo ThinkPad T580 15.6" 20L9001', quantity: '1', price:'1624.95', total: '1624.95'}],
	// 	totalOrder: '1637.95'
	// });
	//
	// let order2 = new Order({
	// 	customerID: customer2._id,
	// 	products: [{productID: product2._id, productName: 'HS Shampoo 24oz', quantity: '1', price:'6.50', total: '6.50'},
	// 		{productID: product1._id, productName: 'Lenovo ThinkPad T580 15.6" 20L9001', quantity: '10', price:'1624.95', total: '16249.50'}],
	// 	totalOrder: '16256.00'
	// });
	//
	// let order3 = new Order({
	// 	customerID: 'string',
	// 	products: [{productID: 'string', productName: 'string', quantity: 'number', price:'number', total: 'number'}]
	// });




	await Promise.all([
			product1.save()
			// product2.save(),
			// product3.save(),
			// customer1.save(),
			// customer2.save(),
			// customer3.save(),
			// order1.save(),
			// order2.save()
		]);

	let currentProduct = await Product.find({});
	// let currentCustomers = await Customer.find({});

	console.log(currentProduct);
	// console.log(currentCustomers);

	process.exit();


})();












