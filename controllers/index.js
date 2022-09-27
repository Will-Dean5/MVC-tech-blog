const router = require('express').Router();
const apiRoutes = require('./api');
const exRoutes = require('./ex_routes');
const loginRoutes = require('./login_routes');
const homeRoutes = require('./home_routes');

router.use('/api', apiRoutes);
router.use('/dashboard', exRoutes);
router.use('/', homeRoutes);
router.use('/logIn', loginRoutes);

module.exports = router;