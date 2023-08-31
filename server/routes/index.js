const router = require('express').Router()

const apiRoutes = require('./api')
const htmlRoutes = require('./html/html-routes');

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

router.use('/api', apiRoutes)
router.use('/', htmlRoutes);


module.exports = router