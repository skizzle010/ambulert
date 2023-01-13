const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
// router.get("/list", (req, res) => {
//   res.send("teri mkc");
// });

// module.exports = router;
// router.post("/users", (req, res) => {
//   res.send("Create USer");
// });
// router.get("/",(req,res)=>{
//     res.send("You are a user now")
// })
// router.get("/users",(req,res)=>{res.render("users/new"),{firstname:'test'}})
// router
//   .route("/users/:id")
//   .get((req, res) => {
//     res.send(req.user);
//     res.send(`Get user with ID ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`Update user with ID ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`Delete user with ID ${req.params.id}`);
//   });
// const users = [{ name: "randi" }, { name: "bhosadike" }];
// router.param("id", (req, res, next, id) => {
//   req.user = users[id];
//   console.log("trying");
//   next();
// });