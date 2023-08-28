import mongoose, {Schema, model, models} from "mongoose";
const DataSchema = new Schema({
    source: {
        type : String,
        required : true,
    },
    tags: {
        type : Array<String>,
        enum : [
            'DAO',
            'NFT',
            'MetaVerse',
        ],
        required : true,
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

const Data = models.DataModel || model('Data', DataSchema);
export default Data;