const userService = require("../user/userService");

const Service = new userService();

const showRegister = (req, res) => {
    try { 
        res.render('register');
    } catch (error) {
        console.error('Error rendering register page:', error);
        res.status(500).send('Internal Server Error');
    }
};

const addUser = async (req, res) => {
    const { name, email, username, password } = req.body;

    try {
        res.status(201).json (await Service.addUser ({name, email, username, password}));
    }
    catch (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    showRegister,
    addUser,
};
