const express = require('express');
const router = express.Router();
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

router.get('/', (req, res) => {
  const input = req.query.input;
  const initNum = convertHandler.getNum(input);
  const initUnit = convertHandler.getUnit(input);

  if (initNum === 'invalid number' && initUnit === 'invalid unit') {
    return res.json('invalid number and unit');
  } else if (initNum === 'invalid number') {
    return res.json('invalid number');
  } else if (initUnit === 'invalid unit') {
    return res.json('invalid unit');
  }

  const returnNum = convertHandler.convert(initNum, initUnit);
  const returnUnit = convertHandler.getReturnUnit(initUnit);
  const result = `${initNum} ${convertHandler.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${convertHandler.spellOutUnit(returnUnit)}`;

  res.json({ initNum, initUnit, returnNum: returnNum.toFixed(5), returnUnit, result });
});

module.exports = router;
