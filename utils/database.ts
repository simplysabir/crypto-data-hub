import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("MongoDB is Connected");
        return;
    }

    try {
        await mongoose.connect("mongodb+srv://simplysabir:vGk9b6kl0jo8E6CD@cluster0.6g190mr.mongodb.net/?retryWrites=true&w=majority", {
            dbName: "crypto-data-hub",
        });

        isConnected = true;
        console.log("MongoDB is Connected Successfully");
    } catch (error) {
        console.log(error);
    }
};
