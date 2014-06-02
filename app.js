var hapi = require("hapi");

var server = hapi.createServer('localhost', process.env.PORT || 8888);

server.route({
	method: "GET",
	path: "/{path*}",
	handler: {
		directory: {path: "./public", index: true}
	}
});

server.route({
	method: "GET",
	path: "/pather",
	handler: function (req, res) {
		res.file("/public/pather.html");
	}
});

server.on("request", function (req, evt, tags) {
	if (tags.received) {
        console.log(req.method.toUpperCase(), ": ", req.url.path);
    }
});

server.start(function () {
	console.log("server running at http://localhost:8888");
});