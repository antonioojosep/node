import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Esquema de la coleccion User

const userSchema = new mongoose.Schema({
    username : {type:String, required:true, unique:true},
    password : {type:String, required:true},
});

// deberia encriptar la contraseña antes de guardarla

userSchema.pre("save", async function(next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

// metodo para comparar la contraseña introducida con la contraseña encriptada
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export default mongoose.model("user", userSchema);