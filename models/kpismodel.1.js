
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

var kpisModel = function () {
};

kpisModel.kpiDeliveryReturnEmpty = function (callBack) {
    con.query("SELECT type,SUM(quantity) AS quantity, name FROM `viewing_product` INNER JOIN `product` ON idproduct = id GROUP BY `idproduct`,`type`", function (err, result) {
        if (err) throw err;                
        callBack({ result: 1, message: "OK", data: result });
    });
};

kpisModel.sales = function (callBack) {
    var sumaEntregas = 0;
    con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'delivery' AND idproduct= 1", function (err, result) {
        if (err) throw err;
        sumaEntregas = result[0].quantity;
        con.query("SELECT quantity FROM viewing_product WHERE type = 'delivery' AND `idproduct`= 1 ORDER BY `idviewing` DESC LIMIT 1", function (err, result) {
            if (err) throw err;
            sumaEntregas -= result[0].quantity;            

            con.query("SELECT SUM(quantity) as quantity FROM viewing_product WHERE type = 'return' AND `idproduct`= 1 ", function (err, result) {
                if (err) throw err;
                console.log(result[0].quantity);
                sumaEntregas -= result[0].quantity;            
                callBack({ result: 1, message: "OK", data: sumaEntregas });
            });
        });
    });    
};

module.exports = kpisModel;



