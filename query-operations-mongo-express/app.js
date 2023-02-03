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
// const createdocument =  async () => {
//   try {
//     const nodelist = new Playlist({
//         name: "nodejs",
//         ctype: "Backend",
//         videos: "7",
//         author: "dhaval",
//         active: true
//     })
    
//     const result = await nodelist.save();
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createdocument();

// //creting new collection to insert
// const demo = new mongoose.model("demo", testschema);
// //insert multiple documents
// const multidocument =  async () => {
//     try {
//       const nodejs = new Playlist({
//           name: "nodejs",
//           ctype: "Backend",
//           videos: "7",
//           author: "dhaval",
//           active: true
//       })

//       const reactjs = new Playlist({
//         name: "reatcjs",
//         ctype: "front",
//         videos: "7",
//         author: "dhaval",
//         active: true
//     })
      
//       const result = await demo.insertMany([nodejs, reactjs]);
//       console.log(result);
//       }catch(err){
//           console.log(err);
//       }
//   }
  
// multidocument();


//reading gtquery in mongodb
// const getDocumnt = async() => {

//     try{
//     //you can find document using find() and filter query using find select and limit
//     const resutlofread = await Playlist
//     .find({ ctype: "Backend"})
//     .select({name:1})
//     .limit(1);
//     console.log(resutlofread);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getDocumnt();



//comparison querys
// const getDocumnt = async() => {

//     try{
//     //you can find document using find() and filter query using find select and limit
//     const resutlofread = await Playlist
//     //finding grater than query gt or lt
//     // .find({videos : { $gt : 50}})
//     //finding grater than or equal to for less than or equal too lte
//     // .find({videos : { $gte : 8}})
//     //using in operator & use nin = not in to not in document
//     .find({ctype : {$in : ["Backend", ""]}})
//     .select({name:1})
//     // .limit(1);
//     console.log(resutlofread);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getDocumnt();


//Logical Operators

//$and = Joins query clauses with a logical AND returns all document that match the condition of both clauses.
//$not = Invents the effect of a query expression and returns documents that do not match the qurey expression 
//$nor = Joins query clauses with a logical NOR returns all documents that fails to match both clauses
//$or = Joins query clauses with a logical OR returns all  documents that match the condition of either clauses.
// const getDocumnt = async() => {

//     try{
//     //you can find document using find() and filter query using find select and limit
//     const resutlofread = await Playlist
//     .find({$or : [ {ctype : "Backend"} , {author: "dhavalsinh"}]})
//     .select({name:1});
//     // .limit(1);
//     console.log(resutlofread);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getDocumnt();


//sorting and Count Query 
const getDocumnt = async() => {

    try{
    //you can find document using find() and filter query using find select and limit
    const resutlofread = await Playlist
    .find({$or : [ {ctype : "Backend"} , {author: "dhaval"}]})
    .select({name:1})
    // .count(); //this will give data of documents
    // .countDocuments(); //this also
    // .sort(); //ths will give how its will create in order
    .sort("name : 1"); //this will give result in asending //replace 1 with -1 and this will give result in desending 

    // .limit(1);
    console.log(resutlofread);
    }
    catch(err){
        console.log(err);
    }
}
getDocumnt();