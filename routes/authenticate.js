var express = require('express');
var router = express.Router();

var MasterConnectionsBD = require('../bd/masterConnectionsBD');
var usersController = require('../controllers/usersController');

var masterDBController = MasterConnectionsBD.getController();

router.post('/login', function (req, res, next) {
    masterDBController.login(req.body.user, req.body.pass, function (err, loginresponse) {
        var now = new Date();
        if (err !== null) {
            console.error(now.toString(), " => err =>", err);
            res.send({ result: false, message: "Error interno." });
        } else {
            if (loginresponse.result === true) {
                masterDBController.verifySession(loginresponse.user.userName, loginresponse.tokenId,
                    loginresponse.accounts[0].id, function (err, authError, response, dbName) {

                        usersController.getUserByIdMaster(loginresponse.user.id,loginresponse.tokenId,loginresponse.user.userName,
                                                            loginresponse.user.rolId,loginresponse.accounts[0].id,req,res);
                        /*
                        var con = clientDBController.getUserConnection(dbName);
                        console.warn("Sacar lo que manda el rol para afuera");
                        con.query(
                            "SELECT * FROM users WHERE id_user_master = ?", [loginresponse.user.id],
                            function (err, userResult) {
                                if (err) {
                                    console.error(now.toString(), " => ", err);
                                } else {
                                    if (userResult.length > 0) {
                                        res.send({
                                            result: true, tokenId: loginresponse.tokenId, user: loginresponse.user.userName,
                                            rolId : loginresponse.user.rolId,
                                            accountId: loginresponse.accounts[0].id, extension: userResult[0].extension, message: ""
                                        });
                                    }
                                }
                            });

                            */
                    });
            } else {
                if (loginresponse.message === "User inactive") {
                    res.send({ result: false, message: "Usuario inactivo" });
                } else {
                    res.send({ result: false, message: "Usuario o clave incorrecta" });
                }
            }
        }
    });
});


router.get('/verifyToken', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        res.send({ result: !authError });
    });
});


router.get('/closeSession', function (req, res, next) {
    masterDBController.verifySession(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, authError, response, dbName) {
        masterDBController.logout(req.headers['user'], req.headers['tokenid'], req.headers['accountid'], function (err, closeResponse) {
            res.send({ result: closeResponse !== false });
        });
    });
});

module.exports = router;