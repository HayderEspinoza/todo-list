const mongosee = require('mongoose');
const Schema = mongosee.Schema;

const TaskSchema = Schema(
  {
    title: { type: String, trim: true },
    description: { type: String, trim: true },
    date: { type: String },
    finished: { type: Boolean, default: false },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

module.exports = mongosee.model('Task', TaskSchema);
