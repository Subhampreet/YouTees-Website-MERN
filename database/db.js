const mongoose = require('mongoose');


const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://youtees-user:youtees@youtees-website.xu0j2.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database connection success");
    }
    catch (err){
        console.log(err);
    }
};


module.exports = connectDB;