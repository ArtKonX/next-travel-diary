import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: false,
        },

        subscriptions: {
            type: Object,
        },

        subscribers: {
            type: Object,
        }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);