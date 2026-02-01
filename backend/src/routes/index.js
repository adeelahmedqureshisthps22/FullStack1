const express = require('express');
const router = express.Router();

// Example route
router.get('/example', (req, res) => {
  res.json({ 
    message: 'This is an example API endpoint',
    data: []
  });
});

// Add more routes here
// router.use('/users', require('./userRoutes'));
// router.use('/products', require('./productRoutes'));

module.exports = router;
