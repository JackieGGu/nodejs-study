const currency = require('./currency');

console.log(currency.RMBToUS(100));
console.log(currency.USToRMB(100));


const Currency = require('./currency-class');

const c = new Currency(7);
console.log(c.USToRMB(50));
console.log(c.RMBToUS(50));
