var mysql = require('mysql');
var messages = require('../messages/messages');

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
    con.query("SELECT * FROM route", function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.add = function (travelName,callBack) {
    con.query("INSERT INTO route (name) VALUES (?)",[travelName], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.addPointOfSale = function (idRoute,idPointOfSale,callBack) {
    con.query("INSERT INTO route_pointofsale (idroute,idpointofsale) VALUES (?,?)",[idRoute,idPointOfSale], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.addUser = function (idRoute,idUser,callBack) {
    con.query("INSERT INTO route_user (idroute,iduser) VALUES (?,?)",[idRoute,idUser], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.update = function (travelName,idRoute,callBack) {
    con.query("UPDATE route SET  name = ? WHERE idroute =?",[travelName,idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.delete = function (idRoute,callBack) {
    con.query("DELETE FROM route WHERE idRoute = ?",[idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

module.exports = travelModel;