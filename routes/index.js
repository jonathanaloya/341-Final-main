const router = require('express').Router();
const {getCars, addCar} = require('../controllers/carController');

router.get('/cars', getCars);
router.post('/cars', addCar);
router.use('/', require('./swagger'));
router.use('/cars', require('./cars'));

router.get('/', (req, res) => {
  res.send('Welcome to B&V Car Shop! We will have a homepage up soon.');
});

// **separate routes for to diferent collections

// router.use('/ferrari', require('./ferrari'));
// router.use('/ford', require('./ford'));
// router.use('/porsche', require('./porsche'));

module.exports = router;
