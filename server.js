/**
 * this will be the starting file of the project
*/
const express = require("express");
const app = express()
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const db_config = require("./configuration/db.config");
const user_model = require("./models/user.model");
const bcrypt = require("bcryptjs");
app.use(express.json());
const PORT = process.env.PORT || 3000
/**
 * create an admin user at the starting of the application 
 * if not already present
 */

mongoose.connect(db_config.DB_URl)
const db = mongoose.connection

db.on("error",()=> {
    console.log("Error while connecting the mongoDB");
})
db.once("open",()=>{
    console.log("Connected to mongoDB")
    init()
});
async function init() {
    try {
        
        let user = await user_model.findOne({userId: "admin"})
        if (user) {
            console.log("Admin is already present")
            return
        }
    } catch (error) {
           console.log("Error while reading the data", error);  
    }
        console.log(user)
        try {
            user = await user_model.create({
                name:"Amit",
                userId:"admin",
                email:"yadavamit123@gmail.com",
                userType:"ADMIN",
                password: bcrypt.hashSync("welcome1",9)
            })   
            console.log("Admin is created", user)
    } catch (error) {
        console.log("Error while creating admin", error);
    }
}
/**
 * Stich the route to the server
 */
require("./routes/auth.route")(app);

/**
 * Start the server
 */
app.listen(PORT,()=> {
    console.log(`Server is listening on ${PORT}`);
})
