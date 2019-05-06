const contact = require('../../model/contact/contact');

exports.getContact = (req, res, next) => {
    contact.findOne()
    .then(result => {
        return res.render('pages/maps', {data: result});
    })
    .catch(err => {
        console.log(err);
        res
            .status(400)
            .json({status:  400 , message: err.toString()});
    });
}