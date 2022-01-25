const {Product} = require('../models')
module.exports.renderProfile = async function (req,res){
    const product = await product.findByPk(
        req.params.id
    );
    res.render('products/profile', {product});
}

