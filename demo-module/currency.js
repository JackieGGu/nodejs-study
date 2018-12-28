const number = 6.8;

function round(amount) {
    return Math.round(amount * 100) / 100;
}

exports.USToRMB = (us) => round(us * number);
exports.RMBToUS = (rmb) => round(rmb / number);
