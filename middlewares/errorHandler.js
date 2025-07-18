const errorHandler = async (req, res, next) => {
    res.status(500).json('Something went wrong');
}

module.exports = errorHandler;