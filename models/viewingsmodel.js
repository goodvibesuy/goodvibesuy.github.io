
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

var viewingsModel = function () {
};

viewingsModel.addVisit = function (idpointofsail,data, callBack) {
    con.query(
        "INSERT INTO viewing  (date, idpointofsail) VALUES(NOW(),?)",
        [idpointofsail],
        function (err, result) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                var idviewing = result.insertId;
                for (var i = 0; i < data.length; i++) {
                    Object.keys(data[i].typeTransaction).forEach(function (key, index) {
                        con.query(
                            "INSERT INTO viewing_product(idviewing,idproduct,quantity,type) VALUES(?,?,?,?)",
                            [idviewing, data[i].id, data[i].typeTransaction[key], key],
                            function (err, resultClient) {
                                if (err) {
                                    if (err.code === "ER_DUP_ENTRY") {
                                        con.release();
                                        callBack(responseObject.response(-1, null, "Error interno."));
                                    }
                                }                                
                                else {
                                    //TODO: corregir
                                }                                
                            }
                        );
                    });
                }
                callBack({ result: 1, message: "OK", data : null });
            }
        }
    );
};

module.exports = viewingsModel;