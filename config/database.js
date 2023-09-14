// const mongoose = require("mongoose");

// require("dotenv").config();

// const connectWithDb = () => {
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(console.log("DB Connected Successfully"))
//     .catch((error) => {
//         console.log("DB Facing Connection Issues");
//         console.log(error);
//         process.exit(1);
//     }) 
// };

// module.exports = connectWithDb;

const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((error) => {
        console.log("DB Facing Connection Issues");
        console.error(error); // Changed from console.log to console.error for better error visibility
        process.exit(1);
    });
};

module.exports = connectWithDb;
