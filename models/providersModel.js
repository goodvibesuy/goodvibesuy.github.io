"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masterDBController = require('../bd/masterConnectionsBD');
var clientDBController = require('../bd/clientConnectionsBD');
var ProvidersModel = /** @class */ (function () {
    function ProvidersModel() {
    }
    ProvidersModel.prototype.getAll = function (dbName, callBack) {
        var pool = clientDBController.getUserConnection(dbName);
        pool.getConnection(function (err, con) {
            if (err) {
                con.release();
                console.error(err);
            }
            else {
                con.query('SELECT * FROM provider', function (err, result) {
                    if (err)
                        throw err;
                    con.release();
                    callBack({ result: 1, message: 'OK', data: result });
                });
            }
        });
    };
    ;
    return ProvidersModel;
}());
module.exports = new ProvidersModel();
//# sourceMappingURL=providersModel.js.map