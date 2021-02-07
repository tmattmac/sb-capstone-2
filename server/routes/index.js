const baseRouter = require('express').Router();

// load routers
const authRouter = require('./auth');
const adminRouter = require('./admin');

// define routes
baseRouter.use('/auth', authRouter);
baseRouter.use('/api', apiRouter);
baseRouter.use('/admin', adminRouter);

module.exports = router;
