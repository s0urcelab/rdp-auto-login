const protocol = require('./protocol');

const c = protocol.rdp.createClient({ 
	domain : '', 
	userName : 'aaaaaa', // account usname
	password : '123123', // account passwd
	enablePerf : true,
	autoLogin : true,
	decompress : false,
	locale : 'en',
	logLevel : 'INFO'
}).on('connect', function () {
    console.log('connect')
}).on('close', function() {
    console.log('close')
}).on('bitmap', function() {
    // console.log('bitmap')
}).on('error', function(err) {
    console.log('err occur!')
}).connect('example.com', 3389) // address|IP & port

setTimeout(() => c.close(), 6000)