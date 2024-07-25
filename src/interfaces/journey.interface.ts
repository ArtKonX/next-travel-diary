export default interface IJourney {
    _id: string,
    email: string,
    name: string,
    title: string,
    content: string,
    photos: [],
    price: number,
    location: {
        dataLoc:  [String, String],
    },
    createdAt: Date,
}