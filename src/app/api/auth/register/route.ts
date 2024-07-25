import User from "@/models/User";
import connect from "@/db/mongpDb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";

export const POST = async (request: NextRequest) => {
    const { name, email, password, subscriptions } = await request.json();

    await connect();

    const db = mongoose.connection.db;


    const collections = await db.listCollections().toArray();
    const collectionName = 'users';
    const collectionExists = collections.some((collection) => collection.name === collectionName);


    if (!collectionExists) {
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created.`);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        subscriptions,
    });

    try {

        await newUser.save();
        return new NextResponse("User is registered", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        });
    }
};