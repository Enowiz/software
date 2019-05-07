exports.getHome = (req, res, next) => {
    res.render('pages/dashboard');
}

exports.getMaps = (req, res, next) => {
    res.render('pages/maps');
}