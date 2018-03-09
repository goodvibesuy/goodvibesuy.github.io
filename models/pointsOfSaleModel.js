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

var pointOfSaleModel = function () {
};

pointOfSaleModel.getAll = function (callBack) {
    con.query("SELECT * FROM pointofsale", function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

pointOfSaleModel.getPointOfSale = function (idPointOfSale,callBack) {
    con.query("SELECT * FROM pointofsale WHERE id = ?", [idPointOfSale],function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result[0] });
    });
};

pointOfSaleModel.getFilteredByName = function (filterName,callBack) {
    con.query("SELECT * FROM pointofsale WHERE name LIKE ?", ["%" +filterName + "%"],function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};


pointOfSaleModel.delete = function (id,callBack) {
    con.query(
        "DELETE FROM pointofsale WHERE id = ? ",
        [id],
        function (err, resultClient) {
            if (err) {
                console.log(err);
                /*
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
                */
            } else {
                callBack({ result: 1, message: "OK" });
            }
        }
    );
};


module.exports = pointOfSaleModel;