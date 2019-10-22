const express = require('express');
const routes = express();

const tasks = require('./tasks/routes');

routes.use('/tasks', tasks);

module.exports = routes;
