// this router is used to send email to the customer.

const router = require('express').Router();
const transporter = require('../config/transporter'); 

router.post('/', async (req, res) => {
    try {
      const result = await transporter.sendMail(req.body);  

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 