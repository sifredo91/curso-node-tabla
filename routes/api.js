const router = require('express').Router();

const { routerUser } = require(`./user/user`)

router.use('/usuario', routerUser);

module.exports = router;