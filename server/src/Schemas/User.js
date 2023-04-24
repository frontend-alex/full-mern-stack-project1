const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength : [6, "Password is too short"]
    },
    userPfp : {
        type: String,
    },
    bio : {
        type: String,
    },
})

UserSchema.pre("save", async function(next){
    await bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;

            next();
        })
})


UserSchema.method('comparePasswords', function(password){
    return bcrypt.compare(password, this.password);
})

const User = model("User", UserSchema);

module.exports = User;
