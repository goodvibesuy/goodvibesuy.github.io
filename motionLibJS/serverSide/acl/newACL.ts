var acl = require('acl');
acl = new acl(new acl.memoryBackend());

class NewACL {

    constructor() {        
    }

    getACL():any {
        return acl;
    };

    setUp(connection: any):void {
        var mainThis = this;
        connection.query("SELECT id FROM rols ",
            function (err:any, rols:any) {
                if (err) {
                    console.log(err);
                } else {
                    for (var i = 0; i < rols.length; i++) {
                        var rolId = rols[i].id;
                        mainThis.addResourceRol(connection, rolId);
                    }
                }
            });

        connection.query("SELECT user_name , r.id as rol FROM users u INNER JOIN rols r ON  u.rol_id = r.id",
            function (err:any, users:any) {
                if (err) {
                    console.log(err);
                } else {
                    for (var i = 0; i < users.length; i++) {
                        acl.addUserRoles(users[i].user_name, users[i].rol.toString());
                    }
                }
            });
    };

    addResourceRol(connection: any, rolId: number):void {
        connection.query("SELECT r.name FROM rols_resources r_r INNER JOIN resources r ON r_r.resource_id = r.id WHERE rol_id = " + rolId,
            function (err:any, resources:any) {
                if (err) {
                    console.log(err);
                } else {
                    var resourcesRol = [];
                    for (var j = 0; j < resources.length; j++) {
                        resourcesRol.push(resources[j].name);
                    }
                    acl.allow(rolId.toString(), resourcesRol, '*');
                }
            });
    };

    updateRolesUser(userId:number, rolId:number):void {
        acl.userRoles(userId, function (err:any, roles:any) {
            acl.removeUserRoles(userId, roles, function (err:any) {
                acl.addUserRoles(userId, rolId.toString());
            });
        });
    };

    addUserRoles(userId:number, rolId:number):void {
        acl.addUserRoles(userId, rolId.toString());
    };
}

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