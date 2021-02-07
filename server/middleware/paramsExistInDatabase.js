const models = require('../models');

module.exports = (req, res, next) => {
  const { courseId, unitId, subunitId, resourceId } = req.params;
  next();
}