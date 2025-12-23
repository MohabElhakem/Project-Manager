const mongoose = require('mongoose');
const constants = require('../../config/constants');

const projectShema = mongoose.Schema({
    manager_id : {
        type : mongoose.Types.ObjectId,
        required: true,
        index: true,
        ref: "User"
    },
    name : {
        type: String,
        trim :true,
        required: true
    },
    members : [
                {
                    type : mongoose.Types.ObjectId,
                    ref: "User",
                    index:true
                }
    ],
    notes : [
            {
                text:{
                    type: String,
                    required: true
                },
                author:{
                    type: mongoose.Types.ObjectId,
                    ref : "User",
                    required: true
                },
                createdAt: {
                    type: Date,
                    default : Date.now
                },
                to: {
                    type : mongoose.Types.ObjectId ,
                    default: null,
                    ref: "User"
                }
            }
                
    ],
    status : {
        type : String,
        enum : constants.projectStatus,
        default: 'in progress'
    },
    tasks: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Task"
            }
    ]
},{ timestamps: true });

module.exports = mongoose.model('Project',projectShema);

/**
 * Project Schema
 *
 * Purpose:
 *  - Represents a project managed by a user.
 *  - Tracks project manager, members, status, and notes.
 *
 * Fields:
 *  - manager_id: Reference to the User who manages the project (required, indexed)
 *  - name: Project name (required, trimmed)
 *  - members: Array of User references who are part of the project
 *  - notes: Embedded array of notes with:
 *      - text: Note content (required)
 *      - author: Reference to the User who created the note (required)
 *      - createdAt: Timestamp when note was created
 *      - to: Optional reference to a User the note is directed to (nullable)
 *  - status: Enum representing the project status (default: 'in progress')
 *  - tasks: Array of Task references associated with the project
 *
 * Features:
 *  - Timestamps enabled (createdAt, updatedAt)
 *  - Supports populating references for manager, members, note authors, and tasks
 *  - Designed for both manager and member access, with optional note targeting
 */


