import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
    {title : {
        type : String,
        required : [true, "Title di isi"],
        trim : true
    },
    icon : {
        type : String,
        required : [true, "Icon di isi"],
        trim : true
    },
    url : {
        type : String,
        required : [true, "URL di isi"],
        trim : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true 
    }
    },
    {
        timestamps : true
    }
)

const linkModel = mongoose.model('Link', LinkSchema)

export default linkModel