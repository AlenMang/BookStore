const pool = require('../db/pgConnection');
const jwt = require('jsonwebtoken');

const registerUser = async (body) => {
    try {
        const arguments = [body.name, body.password, body.role];
        const result = await pool.query('INSERT INTO users(name, password, role) VALUES ($1, $2, $3) RETURNING id ', arguments);
        return jwt.sign({id: result.rows[0].id}, process.env.JWT_SECRET);
    } catch (error) {
        throw error;
    }
}

const loginUser = async (body) => {
    try {
        const arguments = [body.name];
        const result = await pool.query('SELECT * FROM users WHERE name', arguments);
        if (result.rows[0].password === body.password) {
            return jwt.sign(result.rows[0].id, process.env.JWT_SECRET);
        }
        return null;
    }catch (error) {
        throw error;
    }
}

module.exports = {registerUser, loginUser};