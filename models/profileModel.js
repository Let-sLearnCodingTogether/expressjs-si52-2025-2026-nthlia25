import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {displayName : {
        type : String,
        required : [true, "Display Name wajib di isi"]
    },
    profilePicture : {
        type : String,
        required : [true, "Profile picture wajib di isi"]
    },
    bio : {
        type : String,
        mainLength : [10, "minimal 10 karakter"],
        maxLength : [150, "maximal 150 karakter"],
        required : [true, "Bio wajib di isi"]
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

const ProfileModel = mongoose.model('Profile', ProfileSchema)

export default ProfileModel