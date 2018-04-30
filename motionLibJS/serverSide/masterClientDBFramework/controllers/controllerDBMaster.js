"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUsersBuilder = require('../db/dbUsers');
var dbSessionsBuilder = require('../db/dbSessions');
//var connectionBuilder = require('../../mysql/mysqlConnection');
var mysqlConnection_1 = require("../../mysql/mysqlConnection");
var MasterDatabaseConnection_1 = require("../db/MasterDatabaseConnection");
var ControllerDBMaster = /** @class */ (function () {
    function ControllerDBMaster(host, port, databaseName, userDB, passwordDB, usersDbModelMap) {
        console.log('init creation of  framework client db controller.');
        this.host = host;
        this.port = port;
        this.user = userDB;
        this.password = passwordDB;
        this.connectionPool = [];
        this.zenouraMysql = new mysqlConnection_1.ZenouraMysqlConnection();
        this.dbMasterConnection = new MasterDatabaseConnection_1.MasterDatabaseConnection(host, port, databaseName, this.user, this.password);
        this.dbUsers = new dbUsersBuilder(usersDbModelMap, this.dbMasterConnection);
        this.dbSessions = new dbSessionsBuilder(this.dbMasterConnection);
    }
    ControllerDBMaster.prototype.getUserConnection = function (databaseName) {
        if (this.connectionPool[databaseName] && this.connectionPool[databaseName] !== undefined) {
            console.log('usando conexion con bd cliente ya existente.');
            return this.connectionPool[databaseName];
        }
        else {
            console.log('intentando crear conexion cliente.');
            var connection = this.zenouraMysql.establishConnection(this.host, this.port, databaseName, this.user, this.password);
            console.log('creando conexion con bd cliente.');
            console.log(this.host);
            console.log(this.port);
            console.log(databaseName);
            this.connectionPool[databaseName] = connection;
            return connection;
        }
    };
    ;
    ControllerDBMaster.prototype.getMasterConnection = function () {
        return this.dbMasterConnection;
    };
    ControllerDBMaster.prototype.verifySession = function (user, tokenId, accountId, callback) {
        this.dbSessions.verifySession(user, tokenId, accountId, function (err, authError, result, client_database_name) {
            if (err) {
                callback(err, authError, false);
                return;
            }
            else if (!result) {
                callback('invalid session', authError, false);
                return;
            }
            else {
                callback(null, authError, true, client_database_name);
                return;
            }
        });
    };
    ;
    ControllerDBMaster.prototype.logout = function (user, accountId, tokenId, callback) {
        var dbSessionAux = this.dbSessions;
        this.dbSessions.verifySession(user, tokenId, accountId, function (err, authError, result) {
            if (err) {
                callback(err, false);
                return;
            }
            else if (authError) {
                callback('invalid session', false);
                return;
            }
            else if (!result) {
                callback('internal error', false);
                return;
            }
            else {
                dbSessionAux.deleteSession(user, accountId, function (err) {
                    if (err) {
                        callback(err);
                        return;
                    }
                    else {
                        callback(null, err);
                        return;
                    }
                });
            }
        });
    };
    ;
    ControllerDBMaster.prototype.login = function (user, password, callback) {
        var dbSessionAux = this.dbSessions;
        this.dbUsers.login(user, password, function (err, loginResponse) {
            if ((loginResponse) && (loginResponse.result)) {
                dbSessionAux.createSession(loginResponse, function (err, loginResponseSession) {
                    if (err)
                        callback(err, loginResponseSession);
                    else
                        callback(null, loginResponseSession);
                });
            }
            else {
                callback(err, loginResponse);
            }
        });
    };
    ;
    ControllerDBMaster.prototype.updateState = function (userId, state, accountId, callBack, callBackError) {
        this.dbUsers.updateState(userId, state, accountId, function (err, updateStateResponse) {
            if ((updateStateResponse) && (updateStateResponse.result)) {
                callBack(null, updateStateResponse);
            }
            else {
                callBack(err, updateStateResponse);
            }
        }, function (result) {
            callBackError(result);
        });
    };
    ;
    return ControllerDBMaster;
}());
exports.ControllerDBMaster = ControllerDBMaster;
//# sourceMappingURL=controllerDBMaster.js.map