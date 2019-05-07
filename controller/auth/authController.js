const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../model/users/user');
const key = require('../../util/util');
const Sequelize = require('sequelize');
const Op = Sequelize.Op

exports.getLogin = (req, res, next) => {
    if(req.session.isLoggedIn) {
        return res.render('pages/dashboard');
    } else {
        res.render('pages/login');
    }
    
}

exports.getRegister = (req, res, next) => {
    if(req.session.isLoggedIn) {
        return res.render('pages/dashboard');
    } else {
        res.render('pages/register');
    }
    
}

exports.loginController = (req, res, next) => {

    const username = req.body.username;

    const pwd = req.body.password;
    
    console.log(req.body);
    User.findAll( {where : {
        email: username
    }
    })
        .then(user => {
            console.log(user);
            if(!user[0]) {
                return res
                    .status(200) 
                    .json({status: 400 , message: "Invalid UserID or password"});
            }   
            bcrypt
                .compare(pwd, user[0].dataValues.password)
                .then(check => {
                    // This check gives us boolean
                    if(check) {
                        
                        if(parseInt(user[0].dataValues.status) === 0){ // Negelecting Type
                            
                            return res.status(400).json({status: 400 , message: "Profile Not Activated!"});

                        }else{
                            req.session.isLoggedIn = true;
                            req.session.user_id = user[0].dataValues.user_id;
                            req.session.cookie.maxAge = 10000 * 60 * 60;
                            if(user[0].dataValues.role == 'admin') {
                                req.session.admin = true;
                            } else {
                                req.session.admin = false;
                            }
                        return res
                            .status(200)
                            .json({
                                status: 200 ,
                                message: "User Logged In  Successfully",
                                // token: token,
                               
                            });
                    }
                }else{
                        res
                        .status(200)
                        .json({status: 201 , message: "Invalid UserID or password"});
                    }
                })
                .catch(err => {
                    console.log(err);
                    res
                        .status(400)
                        .json({status:  400 , message: err.toString()});
                });
        });
}

exports.signupController = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const pwd = req.body.password;
    const name = req.body.username;
    const role = "admin";
    const phone = req.body.phone;
    
    
    User.findOne({where : 
        {
            email: email
        }
    })
        .then(users => {
            // console.log(users);
            if(users) {
                return res  
                        .status(200)
                        .json({status: 400 , message: "User already registered!"});
            }
            return bcrypt
                .hash(pwd, 12)
                .then(hashedPwd => {
                    const user = new User({
                        email: email,
                        password: hashedPwd,
                        name: name,
                        role : role,
                        phone : phone,
                        status: '1'
                    })
                    // console.log(user);
                    return user.save();
                })
                .then(result => {
                    console.log(result);
                    return res
                            .status(200)
                            .json({"status": 200 , "message": "User Signed successfully!"});
                })
        })
        .catch(err => {
            return res
                    .status(400)
                    .json({"status": 400, "message": err.toString()});
        })
}

exports.logoutController = (req, res, next) => {
    req.session.destroy(err => {
        if(err)
            console.log(err);
    })
    return res.redirect('/');
}