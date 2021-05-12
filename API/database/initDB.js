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

	await Promise.all([
			product1.save()

		]);

	let currentProduct = await Product.find({});
	// let currentCustomers = await Customer.find({});

	console.log(currentProduct);
	// console.log(currentCustomers);

	process.exit();


})();












