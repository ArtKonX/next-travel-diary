import Journey from "@/models/Journey";
import connect from "@/db/mongpDb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '150mb',
        },
    },
};

export const POST = async (request: NextRequest) => {
    const { email, name, title, content, photos, price, city, country } = await request.json();

    await connect();

    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();
    const collectionName = 'journeys';
    const collectionExists = collections.some((collection) => collection.name === collectionName);


    if (!collectionExists) {
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created.`);
    }

    try {
        const newJourney = new Journey({
            email,
            name,
            title,
            content,
            photos: photos,
            price,
            location: {
                dataLoc: [city, country],
            },
        });

        await newJourney.save();

        return new NextResponse('Journey added successfully', { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
};


export const GET = async (request: NextRequest) => {

    await connect();

    try {

        const journeys = await Journey.find();

        if (!journeys) {
            return new NextResponse("Journes not found", { status: 404 });
        }

        return new NextResponse(JSON.stringify(journeys), { status: 200 });


    } catch (err: any) {
        return new NextResponse(err.message, { status: 500 });
    }
};
