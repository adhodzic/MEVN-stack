const database = require("../../../services/database.js");
const { RoleModel } = require("../../../models/Role.js");

exports.getRoles = function () {
    database.dbConnect();
    return (req, res) => {
        RoleModel.find({}, (error, document) => {
            if (error) return res.statusCode(500);
            console.log(document);
            return res.send(document);
        });
    };
};

exports.addRole = function () {
    database.dbConnect();
    return (req, res) => {
        console.log(req.body.name, req.body.roleID)
        if(!req.body.name && !req.body.roleID) return res.sendStatus(400)
        const newRole = new RoleModel({name: req.body.name, roleID: req.body.roleID})
        newRole.save((error)=>{
            if(error) return res.send(error);
            return res.sendStatus(200);
        })
    };
};
