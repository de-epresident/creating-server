const mongoose = require('mongoose');

async function dbconfig(){
    try{
        await mongoose.connect("mongodb+srv://depresident:oghenerume@cluster0.p1udg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconfig();