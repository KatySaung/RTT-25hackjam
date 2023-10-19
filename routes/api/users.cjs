const express = require("express");
const router = express.Router( );

const usersCtrl = require("../../controllers/api/users.cjs");
const ensureLoggedIn = require("../../config/ensureLoggedIn.cjs")

router.post("/",usersCtrl.create);


router.post("/login", usersCtrl.login);

router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;