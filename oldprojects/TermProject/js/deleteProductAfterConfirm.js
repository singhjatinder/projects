const productDB = require('../productDB.js');
const Product = productDB.getModel();

module.exports =  async (req , res , next) => {

    let id = req.body.id;

    Product.findById(id, (err, product) => {

        if (err) {
            console.log("Error selecting: %s", err);
        }
        if (!product) {
            return res.render('404');
        }
        product.remove((err) => {
            if (err) {
                console.log("Error selecting: %s", err);
            }
            res.redirect('/products');
        });
    });
    
        
  };

  