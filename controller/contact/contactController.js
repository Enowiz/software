const query = require('../../model/query/query');

exports.getContact = (req, res, next) => {
    if(req.session.admin) {
        return res.render('pages/contact', {admin: true});
    } else {
        return res.render('pages/contact', {admin: false});
    }
}

exports.addQuery = (req, res, next) => {
    const title = req.body.title;
    const email = req.body.email;
    const body = req.body.query;

    const Query = new query(
        {
            title: title,
            email: email,
            body: body,
            read: '0'
        }
    )

    Query.save()
    .then(result => {
        return res
            .status(200)
            .json({status: 200, message: "success"});
    })
    .catch(err => {
        return res
            .status(200)
            .json({status: 200, message: "Some error occured, please try after some times."})
    })
};