const validation = {
  isEmpty(param) {
    return param === undefined || param === null || param === '' || param === [] || param === {} || param.length === 0;
  },
};

module.exports = validation;
