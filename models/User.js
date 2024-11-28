var knex = require("../database/connection");
var bcrypt = require("bcrypt");

class User{

    // Criar Usuario
    async findAll(){
        try {
        var result = knex.select("id","name","email","role").table("users");
        return result;
        } catch (error) {
            console.log(error);
            return [];            
        }
    }

    async findById(id){
        try {
        var result = await knex.select(["id","name","email","role"]).where({id:id}).table("users");
        
            if (result.length > 0){
                return result[0];                
            } else {
                return undefined;
            }

        } catch (error) {
            console.log(error);
            return undefined;            
        }
    }

    // Criar Usuario
    async new(email, name, password){
        try {
            var hash = await bcrypt.hash(password, 10);
            await knex.insert({email, password: hash, name, role:0}).table("users");
        } catch (error) {
            console.log(error);
        }
    }

    // Procurar Usuario
    async findEmail(email_enviado){
        try {
            var result = await knex.select("*").from('users').where({email: email_enviado})

            if(result.length > 0){
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = new User();