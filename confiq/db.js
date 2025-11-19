const mongoose = require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/drive")
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    console.log("DB error: ", err);
});

module.exports=connection;
