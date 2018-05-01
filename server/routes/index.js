'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./authR'));
router.use('/movies', require('./moviesR'));

module.exports = router;