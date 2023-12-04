const express = require('express');
const controller = require('../controller/fruit_controller')

/*
 * ROUTES SECTION
 */

// Lets create routes as middleware now
const router = express.Router();


router.param('id', (req,res,next,val) => {
    console.log(`Fruit id is ${val}`);
    next();
})



/*
 * ACTUAL ROUTES
 */

router.route("/").get(controller.getAllFruits);
router.route("/:id").get(controller.getAFruit);

module.exports = router;