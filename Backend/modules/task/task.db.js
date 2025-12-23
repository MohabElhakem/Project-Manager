const mongoose  = require('mongoose');
const constants = require('../../config/constants');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  project_id: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true
  },
  assignedTo: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true
  },
  status: {
    type: String,
    enum: constants.taskStatus,
    default: "done",
    trim: true
  },
  dueDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);

/**
 * Task Schema
 *
 * Purpose:
 *  - Represents a task associated with a project.
 *  - Tracks title, description, assignment, status, and due date.
 *
 * Fields:
 *  - title: Task title (required, trimmed)
 *  - description: Task description/details (required, trimmed)
 *  - project_id: Reference to the Project this task belongs to (required)
 *  - assignedTo: Reference to the User responsible for this task (required)
 *  - status: Task status (enum defined in constants.taskStatus, default: 'done')
 *  - dueDate: Optional deadline for the task
 *
 * Features:
 *  - Timestamps enabled (createdAt, updatedAt)
 *  - Supports populating project and assigned user
 */
