var http = require('http');

var querystring = require('querystring');

var options = {
	host:'127.0.0.1',
 	port:9999,
	path:'/bus/refresh',
	method:'POST'   
};

var req = http.request(options,function(res){
	console.log('STATUS:'+res.statusCode);
	console.log('HEADERS:'+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunck){
		console.log('BODY:'+chunck);
	});
});

req.end();