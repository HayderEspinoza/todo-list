const baseRepository = require('../base.repository');
const taskModel = require('./model');

class cityRepository extends baseRepository {
  constructor(props) {
    super(props);
  }

  getModel() {
    return taskModel;
  }
}

module.exports = new cityRepository();
