
var middlewareObj = {};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "Please login first");
    res.redirect("login");
}

middlewareObj.isAdmin = function isAdmin(req, res, next) {

    if (req.user && req.user.username == "admin") {
        return next();
    }
    res.redirect("/problems");
}

module.exports = middlewareObj