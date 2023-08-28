import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is Connected");
        return;
    }

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/", {
            dbName: "crypto-data-hub",
        });

        isConnected = true;
        console.log("MongoDB is Connected Successfully");
    } catch (error) {
        console.log(error);
    }
};
