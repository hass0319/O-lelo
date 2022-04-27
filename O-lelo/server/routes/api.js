const express = require("express");


const apiRouter = express.Router();

apiRouter.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.end();
});



module.exports = apiRouter;