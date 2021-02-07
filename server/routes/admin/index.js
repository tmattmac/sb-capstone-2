const baseRouter = require('express').Router();

// load routers
// const settingsRouter = require('./settings');
const coursesRouter = require('./courses');
const unitsRouter = require('./units');
const subunitsRouter = require('./subunits');
const resourcesRouter = require('./resources');
const apiRouter = require('../api');

// define routes
baseRouter.use('/courses', coursesRouter);
coursesRouter.use('/:courseId/units', unitsRouter);
unitsRouter.use('/:unitId/subunits', subunitsRouter);
subunitsRouter.use('/:subunitId/resources', resourcesRouter);

// fallback to regular API routes when necessary
baseRouter.use(apiRouter);

module.exports = router;
