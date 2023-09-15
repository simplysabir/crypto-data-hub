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
        enum: ['dao & governance', 'nft', 'defi', 'macro', 'metaverse', 'on-chain', 'other', 'dapps', 'token', 'fundraise', 'airdrop', 'chain', 'gamefi', 'analytics'], // List allowed values directly as strings
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