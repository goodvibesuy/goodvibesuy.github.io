var acl = require('acl');
//var masterDBController = require('../bd/masterConnectionsBD');
acl = new acl(new acl.memoryBackend());

console.log("11aasda");

var motionACL = function () {
    console.log("aasda");
};

motionACL.setUp = function(connection){
    console.log("setup");
    connection.query("SELECT id FROM rols ",
        function(err, rols) {
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < rols.length; i++) {
                    var rolId = rols[i].id;
                    addResourceRol(connection,rolId);
                }
            }
        });
        
    connection.query("SELECT user_name , r.id as rol FROM users u INNER JOIN rols r ON  u.rol_id = r.id",
        function(err, users) {
            if (err) {
                console.log(err);
            } else {
                for (var i = 0; i < users.length; i++) {
                    acl.addUserRoles(users[i].user_name, users[i].rol.toString());
                }
            }
        });
};

motionACL.updateRolesUser = function(userId,rolId){
    acl.userRoles( userId, function(err, roles){
        acl.removeUserRoles( userId, roles, function(err){
            acl.addUserRoles(userId, rolId.toString());
        });
    });
};

motionACL.addUserRoles = function(userId,rolId){
    acl.addUserRoles(userId, rolId.toString());
};

//userRoles

function addResourceRol(connection,rolId) {
    connection.query("SELECT r.name FROM rols_resources r_r INNER JOIN resources r ON r_r.resource_id = r.id WHERE rol_id = " + rolId,
            function(err, resources) {
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
}

motionACL.getACL = function(){
    return acl;
};

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
module.exports = motionACL;