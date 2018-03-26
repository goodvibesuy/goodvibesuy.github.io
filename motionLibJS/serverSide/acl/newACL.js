"use strict";
var acl = require('acl');
acl = new acl(new acl.memoryBackend());
var NewACL = /** @class */ (function () {
    function NewACL() {
    }
    NewACL.prototype.getACL = function () {
        return acl;
    };
    ;
    NewACL.prototype.setUp = function (connection) {
        var mainThis = this;
        connection.query("SELECT id FROM rols ", function (err, rols) {
            if (err) {
                console.log(err);
            }
            else {
                for (var i = 0; i < rols.length; i++) {
                    var rolId = rols[i].id;
                    mainThis.addResourceRol(connection, rolId);
                }
            }
        });
        connection.query("SELECT user_name , r.id as rol FROM users u INNER JOIN rols r ON  u.rol_id = r.id", function (err, users) {
            if (err) {
                console.log(err);
            }
            else {
                for (var i = 0; i < users.length; i++) {
                    acl.addUserRoles(users[i].user_name, users[i].rol.toString());
                }
            }
        });
    };
    ;
    NewACL.prototype.addResourceRol = function (connection, rolId) {
        connection.query("SELECT r.name FROM rols_resources r_r INNER JOIN resources r ON r_r.resource_id = r.id WHERE rol_id = " + rolId, function (err, resources) {
            if (err) {
                console.log(err);
            }
            else {
                var resourcesRol = [];
                for (var j = 0; j < resources.length; j++) {
                    resourcesRol.push(resources[j].name);
                }
                acl.allow(rolId.toString(), resourcesRol, '*');
            }
        });
    };
    ;
    NewACL.prototype.updateRolesUser = function (userId, rolId) {
        acl.userRoles(userId, function (err, roles) {
            acl.removeUserRoles(userId, roles, function (err) {
                acl.addUserRoles(userId, rolId.toString());
            });
        });
    };
    ;
    NewACL.prototype.addUserRoles = function (userId, rolId) {
        acl.addUserRoles(userId, rolId.toString());
    };
    ;
    return NewACL;
}());
module.exports = new NewACL();
//userRoles
/*

masterDBController.dbMasterConnection.connection.query("SELECT id FROM rols ",
        function(err, rols) {
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < rols.length; i++) {
                    var rolId = rols[i].id;
                    addResourceRol(rolId);
                }
            }
        });

function addResourceRol(rolId) {
    masterDBController.dbMasterConnection.connection.query("SELECT r.name FROM rols_resources r_r INNER JOIN resources r ON r_r.resource_id = r.id WHERE rol_id = " + rolId,
            function(err, resources) {
                if (err) {
                    console.log(err);
                } else {
                    var resourcesRol = [];
                    for (var j = 0; j < resources.length; j++) {
                        resourcesRol.push(resources[j].name);
                    }
                    console.log(rolId.toString() + " " + resourcesRol);
                    acl.allow(rolId.toString(), resourcesRol, '*');
                }
            });
}

masterDBController.dbMasterConnection.connection.query("SELECT user_name , r.id as rol FROM users u INNER JOIN rols r ON  u.rol_id = r.id",
        function(err, users) {
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < users.length; i++) {
                    acl.addUserRoles(users[i].user_name, users[i].rol.toString());
                }
            }
        });
        
*/ 
//# sourceMappingURL=newACL.js.map