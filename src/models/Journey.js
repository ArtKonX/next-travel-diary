import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        email: {
            type: String,
        },

        name: {
            type: String,
        },

        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        photos: {
            type: []
        },

        price: {
            type: Number
        },

        location: {
            dataLoc: {
                type: [String, String],
                required: true,
            },
        },

        createdAt: { type: Date, default: Date.now },

    }
);

export default mongoose.models.Journey || mongoose.model("Journey", userSchema);