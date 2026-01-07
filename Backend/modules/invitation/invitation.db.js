const mongoose = require ('mongoose');
const constants = require('../../config/constants');


const invitationSchma = mongoose.Schema({
    from: {
        type: String,
        required: true,
        index: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/,"Invailed Email Format"],
        ref : 'User'
    },
    to: {
        type: String,
        required: true,
        index: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/,"Invailed Email Format"],
        ref:'User'
    },
    projectId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    state: {
        type: String,
        default: 'pending',
        enum : constants.invitationStatus
    },
    token : {
        required: true,
    },
    expireIn :{
        type : Date,
        default: () => new Date( Date.now() + 24*60*60*1000),
    }
},{timestamps:true});

module.exports = mongoose.model("Invitation",invitationSchma);