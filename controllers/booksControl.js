const booksModule = require('../modules/booksModule.js');

const bookCreate = async (req, res) => {
    try {
        await booksModule.postBook(req.body);
        res.status(201).json('Successfully created book!');
    } catch (error) {
        throw error;
    }
}

const bookGet = async (req, res) => {
    try {
        const result = await booksModule.getBook(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}

const bookDelete = async (req, res) => {
    try {
        await booksModule.deleteBook(req.params.id);
        res.status(200).json('Successfully deleted book if existed');
    } catch (error) {
        throw error;
    }
}

module.exports = {bookCreate, bookGet, bookDelete};