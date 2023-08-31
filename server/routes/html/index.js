const router = require('express').Router()
const path = require('path')

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

router.get("/about",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.get("/gallery",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.get("/form",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.get("/review",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

// router.use("*",(req, res) => {
//     res.sendFile(path.join(__dirname, "../public", "index.html"));
//   });
  

module.exports = router