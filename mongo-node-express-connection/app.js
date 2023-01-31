const mongoose = require('mongoose');

//connection creation and Creating New DB
//strictQuery is made by mongodb 
//npm i mongoose
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/dhaval", {
    useNewUrlParser: true,  useUnifiedTopology: true,
})
.then(() => {
    console.log("connection is made :) keep using mongodb");
})
.catch((err) => {
    console.log("oh no error");
    console.log(err);
});
