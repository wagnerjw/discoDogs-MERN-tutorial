"# disco-dogs" 


// This is a short and incomplete guide or framework to building out a mern stack app.
//
//
//
//
//

// touch server.js

// npm init

// touch .gitignore

// add 'node_modules/' to .gitignore

// in package.json file change "start" script to --:| "start": "nodemon server.js"

// edit the server.config file and add:

//-----CODE BELOW-----//
//const express = require("express"),
//          app = express(),
//         cors = require("cors"),
//         port = 8000,
//           db = "disco-dogs", //(define the db name here, for this project we set it to "disco-dogs"
//       server = app.listen(port, () => console.log(`Listening on port ${port}`));
//
//app.use(cors());
//app.use(express.json());
//
//require("./server/config/database.config")(db);
//------END OF CODE------//

// mkdir server

// cd into server directory

// mkdir config controllers models routes

// npm i express mongoose cors

// npm start 

// console should say "Listening on port 8000"

// edit the database config file to include the below:

//-----CODE BELOW-----//
//const mongoose = require('mongoose');
//
//module.exports = (name) => {
//   mongoose.connect(`monodb://localhost/${name}` ,{
//        useNewUrlParser: true,
//       useUnifiedTopology: true
//
//   })
//        .then(() => console.log(`Successfully Connected To ${name}`))
//       .catch(err => console.log(err));
//}
//-----END OF CODE-----//

// now we could possibly edit the models in /server/models

// I added dog.model.js first (see file, not worth pasting the whole code)

// in dog.model I created the const "disco dog" (see file)

// then I created dance.model.js file with the DanceMove const

// next we'll build our first controller called dogs.controllers.js 
// (we didnt fill out the update portion but will come back to that)

// next we're going to modify the routes, so first I created dogs.routes.js



// OCT. 10th, 2020 EDIT: THIS NEEDS TO BE POLISHED UP. SHOULD BE WRITTEN AS A CONCISE 
// TECHNICAL DOC I CAN REFER TO FOR CREATING A MINIMAL-ISH FULL STACK MERN APP





