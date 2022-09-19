const moment = require('moment');

let value = { interval:30,From:'09:00',to:'12:00' }
let format = 'hh:mm';

let intervalStartTime = moment(value.From,format);
let intervalEndTime = moment(value.From,format).add(value.interval,'m');
let finishTime = moment(value.to,format);
let finalTime = [];

while(intervalStartTime<finishTime){
  let element = intervalStartTime.format(format) + '-' + intervalEndTime.format(format);
  finalTime.push(element);
  intervalStartTime.add(value.interval,'m')
  intervalEndTime.add(value.interval,'m');   
}

console.log(finalTime);