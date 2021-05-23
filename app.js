let app = require("express")();
let http = require("http").Server(app);

const routes = require("./src/routes/routes");

var port = 3000;

http.listen(port, function () {
  console.log("listening on port : " + port);
});

app.use(routes);

