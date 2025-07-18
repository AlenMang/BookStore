const usersModule = require('../modules/usersModule.js');

const regUser = async (req, res) => {
    try {
        const token = await usersModule.registerUser(req.body);
        res.status(201).json(token);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const loginUser = async (req, res) => {
    try {
        const result = await usersModule.loginUser(req.params.id);
        if (result) {res.status(200).json(result)}

        res.status(404).json('wrong password');  
    } catch (error) {
        throw error;
    }
}

module.exports = {regUser, loginUser};