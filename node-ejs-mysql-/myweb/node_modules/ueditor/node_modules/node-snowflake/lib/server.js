/**
 * User: Kurten
 * Date: 14-3-1
 * Time: 14:38
 * Version: 1.0
 * Description:
 */
var http = require('http');
var url = require('url');
var snowflake = require('./snowflake');

module.exports = function(port) {
	http.createServer(function (req, res) {
		var uobj = url.parse(req.url, true);
		if (uobj.pathname == '/next_id') {
			res.writeHead(200, {'Content-Type': 'application/json'});
			var query = uobj.query || {};
			var id = snowflake.nextId(query.worker_id, query.data_center_id, query.sequence);
			res.end(JSON.stringify({id : id}));
		} else {
			res.writeHead(404, {'Content-Type': 'application/json'});
			res.end(JSON.stringify({status : 404, msg : 'request url error, not found url'}));
		}
	}).listen(port || 3000);

	console.log('now server listen port ' + (port || 3000));

	process.on("uncaughtException", function (err) {
        console.trace("uncaughtException:" + err.stack);
    });
};