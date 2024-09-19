const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async () => {
    try {
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log(`The app is connected with ${mongoose.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        
        process.exit(1); // Exit the process with a failure status code
    }
};