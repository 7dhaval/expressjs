const mongoose = require('mongoose');

//connection creation and Creating New DB
//strictQuery is made by mongodb 
//npm i mongoose
mongoose.set('strictQuery', false);
//create db by passing name
mongoose.connect("mongodb://127.0.0.1:27017/dhavaltest", {
    useNewUrlParser: true,  useUnifiedTopology: true,
})
.then(() => {
    console.log("connection is made :) keep using mongodb");
})
.catch((err) => {
    console.log("oh no error");
    console.log(err);
});

//schema
//mongo schema defines the structure of the document
//defines values validators etc
//create schema validation for document
const testschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//A mongoose Model is a Wraper on the Mongoose schema .
//A mongoose schema defines the structure of the document default values validators 
//wheres a mongoose model provides an interface to the database for creating quering updating and deleting records

//collection creation 
const Playlist = new mongoose.model("Playlist", testschema);
// console.log(collection);

//create documet or insert
//inseret one document
const createdocument =  async () => {
  try {
    const nodelist = new Playlist({
        name: "nodejs",
        ctype: "Backend",
        videos: "7",
        author: "dhaval",
        active: true
    })
    
    const result = await nodelist.save();
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

createdocument();

//creting new collection to insert
const demo = new mongoose.model("demo", testschema);
//insert multiple documents
const multidocument =  async () => {
    try {
      const nodejs = new Playlist({
          name: "nodejs",
          ctype: "Backend",
          videos: "7",
          author: "dhaval",
          active: true
      })

      const reactjs = new Playlist({
        name: "reatcjs",
        ctype: "front",
        videos: "7",
        author: "dhaval",
        active: true
    })
      
      const result = await demo.insertMany([nodejs, reactjs]);
      console.log(result);
      }catch(err){
          console.log(err);
      }
  }
  
multidocument();
