const database = require("../../../services/database.js");
const { UserModel } = require("../../../models/User.js");
const { RoleModel } = require("../../../models/Role.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
exports.getUsers = function () {
    database.dbConnect();
    return (req, res) => {
        console.log(req.body);
        res.sendStatus(200);
    };
};

exports.deleteUser = function () {
    database.dbConnect();
    return (req, res) => {
        console.log(req.body);
        res.sendStatus(200);
    };
};

exports.registerUser = function () {
    database.dbConnect();
    return (req, res) => {
        console.log(req.body);
        if (!req.body.username && !req.body.password) {
            return res.sendStatus(400);
        }

        const username = req.body.username;
        const password = req.body.password;

        const newUser = new UserModel({
            username: username,
            password: password,
            role: "User",
        });

        newUser.save(function (err) {
            console.log(err);
            if (err) return res.json({ err: err });
            const token = jwt.sign(
                {
                    user: {
                        username: username,
                        role: "User",
                    },
                },
                process.env.JWT_SECRET,
                { expiresIn: 480 }
            );
            res.json({
                token: token,
                user: newUser
            });
        });
    };
};

exports.loginUser = function () {
    return (req, res) => {
        if (!req.body.username && !req.body.password) {
            return res.sendStatus(400);
        }
        try {
            const username = req.body.username;
            const password = req.body.password;

            UserModel.findOne({ username: username }, (err, docs) => {
                if (docs === null) return res.sendStatus(400);

                if (err) return res.json({ err: err });

                bcrypt.compare(password, docs.password).then(function (result) {
                    if (!result) {
                        return res.sendStatus(400);
                    }
                    const token = jwt.sign(
                        {
                            user: {
                                username: docs.username,
                                role: docs.role,
                            },
                        },
                        process.env.JWT_SECRET,
                        { expiresIn: 480 }
                    );
                    res.json({
                        token: token,
                        user: {
                            username: docs.username,
                            role: docs.role
                        }
                    });
                });
            });
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    };
};
