const router = require('express').Router()

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

router.use("/about",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.use("/gallery",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.use("/form",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

  router.use("/review",(req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });

// router.use("*",(req, res) => {
//     res.sendFile(path.join(__dirname, "../public", "index.html"));
//   });
  