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

exports.getAllMessage = (req, res, next) => {
    query.findAll()
        .then(result => {
            return res.render('pages/messages', {datas: result, unread: false});
        })
        .catch(err => {
            return res.redirect('/all-messages');
        })
}

exports.getUnread = (req, res, next) => {
    query.findAll(
        {
            where: {
                read: '0'
            }
        }
    )
        .then(result => {
            return res.render('pages/messages', {datas: result, unread: true});
            // return res
            //     .status(200)
            //     .json({json: result})
        })
        .catch(err => {
            return res.redirect('/unread-messages');
        })
}

exports.markRead = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    query.update(
        {
            read: '1'
        }, 
        {
            where: {
                query_id: id
            }
        }
    )
    .then(rewsupdated => {
        return res.redirect('/unread-messages');
    })
    .catch(err => {
        return res.redirect('/unread-messages');
    })
}

exports.deleteOne = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    query.findOne(
        {
            where: {
                query_id: id
            }
        }
    )
    .then(result => {
        if(result) {
            result.destroy()
            .then(Result => {
                return res.redirect('/all-messages');
            })
        }
    })
    .catch(err => {
        return res.redirect('/all-messages');
    })
}