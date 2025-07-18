
const pool = require('../db/pgConnection');

const postBook = async (body) => {
    try {
        const arguments = [body.title, body.author, body.description, body.text, body.isavailable];
        await pool.query('INSERT INTO books(title, author, description, text, isavailable) VALUES ($1, $2, $3, $4, $5)', arguments);
    } catch (error) {
        throw error;
    }
}

const getBook = async (id) => {
    try {
        const result = await pool.query('SELECT * FROM books WHERE id=$1', [id]);
        return result.rows[0];
    } catch (error) {
        throw error;
    }
}

const deleteBook = async (id) => {
    try {
        await pool.query('DELETE * FROM books WHERE id=$1', [id]);
    } catch (error) {
        throw error;
    }
}

module.exports = {postBook, getBook, deleteBook};