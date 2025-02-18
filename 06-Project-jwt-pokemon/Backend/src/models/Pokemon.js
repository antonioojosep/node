import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    id : {type:Number, required:true, unique:true},
    name : {type:String, required:true},
    image : {type:String, required:true},
    height : {type:Number, required:true},
});

export default mongoose.model("pokemon", pokemonSchema);