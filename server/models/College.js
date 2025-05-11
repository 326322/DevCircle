const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('College', CollegeSchema);
