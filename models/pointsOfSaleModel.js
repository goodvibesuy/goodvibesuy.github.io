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
                let errorMessage = "";
                if (err.code === "ER_ROW_IS_REFERENCED_2") {
                    errorMessage = "No se puede borrar el registro, porque es utilizado en otra parte del sistema";
                }                

               callBack({ result: -1, message: errorMessage, data : null });
            } else {
                callBack({ result: 1, message: "OK", data: null });
            }
        }
    );
};

pointOfSaleModel.update = function (id,name,address,tel,coord,callBack) {
    con.query(
        "UPDATE pointofsale  SET name = ?, address = ?, tel = ?, coord = POINT(?,?) WHERE id = ?",
        [name,address,tel, Number(coord.lat) , Number(coord.lng),id],
        function (err, resultClient) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                callBack({ result: 1, message: "Los datos se actualizaron correctamente" });
            }
        }
    );    
};

pointOfSaleModel.add = function(name, address, tel,coord,callBack){
    con.query(
        "INSERT INTO pointofsale  (name, address, tel,coord) VALUES(?,?,?,POINT(?,?))",
        [name, address, tel,Number(coord.lat) , Number(coord.lng)],
        function (err, resultClient) {
            if (err) {
                console.log(err);
                console.log(err.sql);
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                callBack({ result: 1, message: "OK", data:null });
            }
        }
    );
};

module.exports = pointOfSaleModel;