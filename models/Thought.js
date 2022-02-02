const { Schema, model, Types } = require('mongoose');

thoughtText: {
    String
    Required
    minlength: 1,
    maxlength: 280,
},
createdAt: {
    type: Date,
    //value to the current timestamp
    default: Date.now,
    get: () => (),
},
username: {
    type: String,
    required: true,
},
reactions: [reactionSchema],

module.exports = { ThoughSchema, Thought };