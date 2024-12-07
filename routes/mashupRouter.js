const express = require('express');
const mashupMiddleware = require(`${__dirname}/../middlewares/mashupGenerator`);
const contestMiddleware = require('../middlewares/contestsGenerator');

const router = express.Router();

router.route('/generate').get(mashupMiddleware.generateProblemset);
router.route('/contests').get(contestMiddleware.generateContest);

module.exports = router;