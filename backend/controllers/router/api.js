const express = require("express");
const database = require("../database/api");
const apiRoutesFunction = require("./default")

var mainRouter = express.Router();

var apiSportRoutes = apiRoutesFunction(database.model.sport)
mainRouter.use('/sport', apiSportRoutes);

var apiMatchMakingRoutes = apiRoutesFunction(database.model.matchMaking)
mainRouter.use('/matchmaking', apiMatchMakingRoutes);

var apiUserRoutes = apiRoutesFunction(database.model.user)
mainRouter.use('/user', apiUserRoutes);

module.exports = mainRouter