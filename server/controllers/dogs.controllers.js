const mongoose = require("mongoose"),
    DogSchema = require("../models/dog.model"),
    DanceSchema = require("../models/dance.model"),
    Dog = mongoose.model("Dog",DogSchema),
    Dance = mongoose.model("Moves",DanceSchema);

class DogController{
    index(req,res){
        Dog.find()
            .then(allDogs => res.json(allDogs))
            .catch(err => res.json(err))
    }
    create(req,res){
        console.log("3: ", req.body);
        Dog.create(req.body)
            .then(newDog => {
                console.log(newDog)
                res.json(newDog)})
            .catch(err => res.json(err))
    }
    show(req,res){
        console.log(req.params.id)
        Dog.findById({_id:req.params.id})
            .then(oneDog => res.json(oneDog))
            .catch(err => res.json(err))
    }
    update(req,res){
        Dog.findByIdAndUpdate({_id:req.params.id},req.body,{runValidators:true})
            .then( editDog => res.json({msg:"Success"}))
            .catch( err => res.json(err))
    }
    adopt(req,res){
        Dog.deleteOne({_id:req.params.id})
            .then(message => res.json(message))
            .catch(err => res.json(err))
    }
    boogie(req,res){
        Dance.create(req.body)
            .then(newMove => {
                Dog.findByIdAndUpdate({_id:req.params.id},{$push:{moves: newMove}})
                    .then(dogMove => res.json(dogMove))
                    .catch(err => res.json(err));
            })
            .catch(err => res.json(err));
    }
    random(req,res){
        Dog.find()
            .then(allDogs => {
                let rand = Math.floor(Math.random() * allDogs.length);
                res.json(allDogs[rand]);
            })
            .catch(err => res.json(err))
    }
}

module.exports = new DogController();

