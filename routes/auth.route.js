/**
 * POST localhost:5001/ecomm/api/v1/auth/signup
 */

const authController = require("../controller/auth.controller");

module.exports = (app) => {
    app.post("/ecomm/api/v1/auth/signup", authController.signup);
}