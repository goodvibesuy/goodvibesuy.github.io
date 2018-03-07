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

var productModel = function () {
};

productModel.getAll = function (callBack) {
    con.query("SELECT * FROM product", function (err, result) {
        if (err) throw err;
        console.log("Result: ", result);
        callBack({ result: 1, message: "OK", data: result });
    });
};


module.exports = productModel;