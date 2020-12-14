const express = require("express")
const router = express.Router()
const homeController = require("./controllers/HomeController")

// router.get('/', (req,res) => {
//     res.send('Hallo routes /')
// })

router.get('/', homeController.index)
router.get('/about', homeController.about)
router.get('/items', homeController.items)


module.exports = router