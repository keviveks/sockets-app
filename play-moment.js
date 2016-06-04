var moment = require('moment');
var now = moment();

var timestamp = 1465051130138;
var timestampMoment = moment.utc(timestamp);
console.log(timestampMoment.local().format('h:mm a'));

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());
// now.subtract(1, 'year');
// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mm a')); // Jun 2nd 2016, 6:45 pm