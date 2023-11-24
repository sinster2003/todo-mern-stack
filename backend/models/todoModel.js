// creation of todo model to be stored in mongodb

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI);

// schema with validation
const todoSchema = new mongoose.Schema({
    value: {
        type: String,
        minLength: 3,
        required: [true, "Create a todo task"]
    }
});

// toJSON to modify mongodb object to customized js object
todoSchema.set("toJSON", {
    transform: (document, requestedObject) => {
        requestedObject.id = document._id.toString();

        delete requestedObject._id;
        delete requestedObject.__v;
    }
})


// model 
module.exports = mongoose.model("Todo",todoSchema);