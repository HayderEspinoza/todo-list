const { validationResult } = require('express-validator');
const taskRepo = require('./repository');
const { formatError } = require('../../utils/helpers');
const { messages } = require('../../utils/constants');
const moment = require('moment');

async function index(req, res) {
  try {
    const {
      query: { date }
    } = req;
    let filter = { date: date || moment().format('MM-DD-YYYY') };
    const tasks = await taskRepo.find(filter);
    return res.status(200).send(tasks);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ error });
  }
}

async function store(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(409)
        .send({ errors: errors.formatWith(formatError).mapped() });
    else {
      const task = await taskRepo.save(req.body);
      return res.status(201).send({ message: messages.stored, task });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function update(req, res) {
  const {
    params: { id: taskId },
    body: { title, date }
  } = req;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(409).send({ errors: errors.mapped() });
    else {
      const task = await taskRepo.updateById(taskId, { title, date });
      if (task) return res.status(200).send({ message: messages.updated });
      return res.status(404).send({ message: messages.notExist });
    }
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function remove(req, res) {
  try {
    const {
      params: { id: taskId }
    } = req;

    const task = await taskRepo.removeById(taskId);

    if (task) return res.status(200).send({ message: messages.deleted });
    return res.status(404).send({ message: messages.notExist });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

async function updateState(req, res) {
  const {
    params: { id: taskId }
  } = req;

  try {
    const task = await taskRepo.findById(taskId);
    if (task) {
      await taskRepo.updateById(taskId, { finished: !task.finished });
      return res.status(200).send({ message: messages.updated });
    }
    return res.status(404).send({ message: messages.notExist });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

module.exports = {
  index,
  store,
  update,
  remove,
  updateState
};
