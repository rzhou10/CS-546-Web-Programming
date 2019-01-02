const usersRoutes = require("./users");

module.exports = {
    users: usersRoutes.findByUsername,
    usersid: usersRoutes.findById,
};