var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "good"
});

con.connect(function (err) {
  if (err) throw err;
});

var travelModel = function () {
};

travelModel.getAll = function (callBack) {
    con.query("SELECT * FROM travel", function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.add = function (travelName,callBack) {
    con.query("INSERT INTO travel (name) VALUES (?)",[travelName], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.update = function (travelName,idTravel,callBack) {
    con.query("UPDATE travel SET  name = ? WHERE idTravel =",[travelName,idTravel], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};


travelModel.delete = function (idTravel,callBack) {
    con.query("DELETE FROM travel WHERE idTravel = ?",[idTravel], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

module.exports = travelModel;