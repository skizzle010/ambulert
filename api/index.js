//enter the app, the saved user details generate a outpatient record which will get saved in the database vis prisma
const express = require("express")
const app = express()
app.listen(3000)
app.get("/",(req,res)=>{
  res.send("hello new user")
})
