function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.match(/[.\d\/]+/g) || ['1'];
    if (result.length > 1) {
      return 'invalid number';
    }
    return eval(result[0]);
  };

  this.getUnit = function (input) {
    const unit = input.match(/[a-zA-Z]+/g)[0].toLowerCase();
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    if (validUnits.includes(unit)) {
      return unit;
    } else {
      return 'invalid unit';
    }
  };

  this.getReturnUnit = function (initUnit) {
    const unitMap = {
      gal: 'L',
      l: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs',
    };
    return unitMap[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function (unit) {
    const unitFull = {
      gal: 'gallons',
      l: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms',
    };
    return unitFull[unit.toLowerCase()];
  };

  this.convert = function (initNum, initUnit) {
    const conversionRates = {
      gal: 3.78541,
      l: 1 / 3.78541,
      mi: 1.60934,
      km: 1 / 1.60934,
      lbs: 0.453592,
      kg: 1 / 0.453592,
    };
    return initNum * conversionRates[initUnit.toLowerCase()];
  };
}

module.exports = ConvertHandler;
