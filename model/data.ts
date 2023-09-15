import mongoose, {Schema, model, models} from "mongoose";
const DataSchema = new Schema({
    source: {
        type : String,
        required : true,
    },
    link : {
        type : String,
        required : true,
    },
    tags: {
        type: [String],  // Use [String] instead of Array<String>
        enum: ['DAO & Governance', 'NFT', 'DeFi', 'Macro', 'Metaverse', 'On-Chain', 'Other', 'dApps', 'Token', 'Fundraise', 'Airdrop', 'Chain', 'GameFi'], // List allowed values directly as strings
        required: true,
    },
    description : {
        type : String,
        required : true,
    },
    ratings : {
        type : Number,
        required : true,
    }
})

const Data = models.Data || model('Data', DataSchema);
export default Data;