const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        species: {
            type: String,
            required: true,
            trim: true
        },

        breed: {
            type: String,
            trim: true
        },

        age: {
            type: Number,
            required: true,
            min: 0
        },

        weight: {
            type: Number,
            required: true,
            min: 0
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        photo: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Pet", petSchema);