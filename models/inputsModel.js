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

var inputsModel = function () {
};

inputsModel.inputs = function (callBack) {
    con.query("SELECT * FROM input INNER JOIN inputPrice ON id  = idInput ORDER BY date DESC", function (err, result) {
        if (err) throw err;
        callBack({ result: 1, message: "OK", data: result });
    });
};

inputsModel.addInput = function (name, idUnity, price, callBack) {
    con.query(
        "INSERT INTO input  (name, unity) VALUES(?,?)",
        [name, idUnity],
        function (err, result) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                var idInput = result.insertId;

                con.query(
                    "INSERT INTO inputPrice  (date, amount,idInput) VALUES(NOW(),?,?)",
                    [price,idInput],
                    function (err, result) {
                        if (err) {
                            if (err.code === "ER_DUP_ENTRY") {
                                con.release();
                            }
                        } else {
                            callBack({ result: 1, message: "OK" });
                        };
                    });
            }
        }
    );
};

inputsModel.updateInput = function (name, idUnity, price, id, callBack) {
    con.query(
        "UPDATE input  SET name = ?, unity = ? WHERE id = ?",
        [name, idUnity, id],
        function (err, resultClient) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                con.query(
                    "INSERT INTO inputPrice  (date, amount,idInput) VALUES(NOW(),?,?)",
                    [price,id],
                    function (err, result) {
                        if (err) {
                            if (err.code === "ER_DUP_ENTRY") {
                                con.release();
                            }
                        } else {
                            callBack({ result: 1, message: "OK" });
                        };
                    });
            }
        }
    );
}

inputsModel.deleteInput = function (id, callBack) {
    con.query(
        "DELETE FROM input WHERE id = ? ",
        [id],
        function (err, resultClient) {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    con.release();
                }
            } else {
                callBack({ result: 1, message: "OK" });
            }
        }
    );
}

module.exports = inputsModel;