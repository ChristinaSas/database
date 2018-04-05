var mongoose=require('mongoose');

mongoose.connect('mongodb://Sas:front6@ds129156.mlab.com:29156/mydbs');

console.log('mongodb connect...');
module.exports=mongoose;