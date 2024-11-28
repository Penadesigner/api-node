var User = require("../models/User");
class UserController{

    async index(req, res){
        var users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        var id = req.params.id;
        var user = await User.findById(id);
        if(user == undefined){
            res.status(404);
            res.json({error: "Não encontrado!"});
        } else {
            res.status(200);
            res.json(user);
        }
    }

    async create(req, res){
        var{email, name, password} = req.body;

        if(email == undefined){
            res.status(400);
            res.json({err: "O email é invalído!"});
            return;
        }

        var emailJaExiste = await User.findEmail(email);

        if (emailJaExiste) {
            res.status(406);
            res.json({err: "O e-mail já esta cadastrado"});
            return;
        }
        
        await User.new(email,name,password);

        res.status(200);
        res.send("Salvo!");
    }
}

module.exports = new UserController();