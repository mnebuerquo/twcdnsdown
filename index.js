/*
 * Test dns servers for my TWC service, report an outage if they are
 * down.
 *
 * Use node's dns module.
 *
 * Use twitter to report the outage.
 *
 * */

var async = require('async');
var dns = require('dns');

var testnames = [
'www.google.com',
	'www.stackoverflow.com',
	'minecraft.net',
	'www.tftsu.com',
	];

var nameservers = [
'1.2.3.4',
	'209.18.47.61',
	'209.18.47.62',
	];


function testName(item,cb){
	function afterTestName(err,addresses){
		if(err){
			return cb(err);
		}
		// Node crashes if you try to switch servers in the callback
		// from dns.resolve!
		// See the crash error in this issue and workaround:
		// https://github.com/nodejs/node/issues/1071#issuecomment-77460270
		setTimeout(function(){
			cb(null);
		},0);
	}
	//var options = {};
	dns.resolve4(item, afterTestName);
};

function testNameServer(nameserver,cb){
	//set name server
	dns.setServers([nameserver]);
	//do all name tests
	async.eachSeries(
			testnames,
			testName,
			cb);
}

function testDNS(cb){
	async.eachSeries(nameservers,testNameServer,function(err){
		if(err){
			// this server failed, so log the error and quit
			return cb(err);
		}
		cb();
	});
}

function main(cb){
	testDNS(cb);

}

main(function(err){
	console.log('done!');
});

