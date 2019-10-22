const { check } = require('express-validator');

const validator = option => {
  switch (option) {
    case 'store': {
      return [
        check('title').exists(),
        check('date').custom(date => {
          if (!/\d{0,2}-\d{0,2}-\d{0,4}/.test(date))
            return Promise.reject('Invalid date');
          else return Promise.resolve();
        })
      ];
    }
    case 'update': {
      return [
        check('title').exists(),
        check('date')
          .exists()
          .custom(date => {
            if (!/\d{0,2}-\d{0,2}-\d{0,4}/.test(date))
              return Promise.reject('Invalid date');
            else return Promise.resolve();
          })
      ];
    }
    default:
      return [];
  }
};

module.exports = validator;
