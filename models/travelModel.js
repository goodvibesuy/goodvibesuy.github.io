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

travelModel.add = function (travelName, callBack) {
    con.query("INSERT INTO route (name) VALUES (?)", [travelName], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.addPointOfSale = function (idRoute, idPointOfSale, callBack) {
    con.query("SELECT position AS last FROM route_pointofsale WHERE idroute = ? order by position desc limit 1", [idRoute], function (err, result) {
        if (err) throw err;
        var lastPointOfSale = result[0].last;
        con.query("INSERT INTO route_pointofsale (idroute,idpointofsale,position) VALUES (?,?,?)", [idRoute, idPointOfSale, lastPointOfSale + 1], function (err, result) {
            if (err) throw err;
            callBack({ result: 1, message: "OK", data: result });
        });
    });
};

/*
travelModel.addUser = function(idRoute,idUser,,callBack){
    con.query("INSERT INTO route_user (idroute,idUser,date) VALUES (?,?,NOW())",[idRoute,idPointOfSale], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
    res.send(result);
};
*/

travelModel.addUser = function (idRoute, idUser, date, callBack) {
    con.query("INSERT INTO route_user (idroute,iduser,date) VALUES (?,?,?)", [idRoute, idUser, date.year + "-" + date.month + "-" + date.day], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.removePointOfSale = function (idRoute, idPointOfSale, callBack) {
    con.query("SELECT position FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err, result) {
        if (err) throw err;
        var positionPointOfSale = result[0].position;

        con.query("DELETE FROM route_pointofsale WHERE idroute = ? AND idpointofsale = ?", [idRoute, idPointOfSale], function (err, result) {
            if (err) throw err;
            con.query("UPDATE route_pointofsale SET position = position -1 WHERE idroute = ? AND  position > ?",
                [idRoute, positionPointOfSale], function (err, result) {
                    callBack({ result: 1, message: "OK", data: result });
                });
        });
    });
}

travelModel.reorderPointOfSale = function (idRoute, idPointOfSale, position, newPosition, callBack) {
    con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND position = ?", [position, idRoute, newPosition], function (err, result) {
        if (err) throw err;
        con.query("UPDATE route_pointofsale SET position = ? WHERE idroute = ? AND idpointofsale = ?",
            [newPosition,idRoute, idPointOfSale], function (err, result) {
                callBack({ result: 1, message: "OK", data: result });
            });
    });
}

travelModel.getPointsOfSales = function (idRoute, callBack) {
    con.query("SELECT * FROM route_pointofsale INNER JOIN pointofsale as POS ON POS.id = idpointofsale WHERE idroute = ? ORDER BY position ASC", [idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.getUers = function (idRoute, callBack) {
    con.query("SELECT * FROM route_user INNER JOIN users as u ON u.id = idUser WHERE idroute = ?", [idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
}

travelModel.update = function (travelName, idRoute, callBack) {
    con.query("UPDATE route SET  name = ? WHERE idroute =?", [travelName, idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

travelModel.delete = function (idRoute, callBack) {
    con.query("DELETE FROM route WHERE idRoute = ?", [idRoute], function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

module.exports = travelModel;