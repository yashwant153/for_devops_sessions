const express = require('express');
const controller = require('../controller/fruit_controller')


/*
 * ROUTES SECTION
 */

// Lets create routes as middleware now
const router = express.Router();


/*
 * ACTUAL ROUTES
 */

router.route("/").get(controller.getAllFruits).post(controller.createFruit);
router.route("/:error").get(controller.getError)


module.exports = router;