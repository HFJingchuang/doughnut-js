var donut = require('./src/donut');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.donut === 'undefined') {
    window.donut = donut;
}

module.exports = donut