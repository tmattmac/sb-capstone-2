const baseRouter = require('express').Router();

// load routers
const coursesRouter = require('./courses');
const unitsRouter = require('./units');
const subunitsRouter = require('./subunits');
const resourcesRouter = require('./resources');

// define routes
baseRouter.use('/courses', coursesRouter);
coursesRouter.use('/:courseId/units', unitsRouter);
unitsRouter.use('/:unitId/subunits', subunitsRouter);
subunitsRouter.use('/:subunitId/resources', resourcesRouter);

module.exports = router;
