const user = require('../../model/users/user');

exports.getProfile = (req, res, next) => {
    const user_id = req.session.user_id;
    user.findOne(
        {
            where: {
                user_id: user_id
            }
        }
    )
    .then(result => {
        let name = "";
        let email = "";
        let phone = "";
        let quote = "";
        if(result) {
            name = result.dataValues.name;
            email = result.dataValues.email;
            phone = result.dataValues.phone;
            quote = result.dataValues.quote;
        }
        
        res.render('pages/profile', {name: name, phone: phone, email: email, quote: quote, loggedIn: true});
    })
    .catch(err => {
        console.log(toString(err));
        res.render('pages/profile', {name: name, phone: phone, email: email, quote: quote});
    })
}

exports.editMail = (req, res, next) => {
    const user_id = req.session.user_id;
    const phone = req.body.mobile;
    user.update(
        {
            phone: phone
        },
        {
            where: {
                user_id: user_id
            }
        }
    )
    .then(( rowsUpdate) => {
        if(rowsUpdate != 1) {
            return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
        } 
        else {
            return res
                        .status(200)
                        .json({status: 201, message: "SUccess"});
        }
        
    })
    .catch(err => {
        console.log(toString(err));
        return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
    })
}

exports.editName = (req, res, next) => {
    const user_id = req.session.user_id;
    const name = req.body.name;
    console.log(name);
    user.update(
        {
            name: name
        },
        {
            where: {
                user_id: user_id
            }
        }
    )
    .then(( rowsUpdate) => {
        if(rowsUpdate != 1) {
            return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
        } 
        else {
            return res
                        .status(200)
                        .json({status: 201, message: "SUccess"});
        }
        
    })
    .catch(err => {
        console.log(toString(err));
        return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
    })
}

exports.editQuote = (req, res, next) => {
    const user_id = req.session.user_id;
    const quote = req.body.quote;
    user.update(
        {
            quote: quote
        },
        {
            where: {
                user_id: user_id
            }
        }
    )
    .then(( rowsUpdate) => {
        if(rowsUpdate != 1) {
            return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
        } 
        else {
            return res
                        .status(200)
                        .json({status: 201, message: "SUccess"});
        }
        
    })
    .catch(err => {
        console.log(toString(err));
        return res
                .status(200)
                .json({status: 400, message: "Some error occured"});
    })
}