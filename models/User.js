
username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
},
email: {
    type: String,
    required: true,
    unique: true,
    //val or match email-mongoose

},

thoughts;

friends;

module.exports = User;