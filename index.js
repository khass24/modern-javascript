var moment = require('moment');
var math = require('mathjs');

console.log("Woohoo");

var dateTime = moment().startOf('hour').fromNow();
console.log(dateTime);

console.log(math.sqrt(4));

//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");
