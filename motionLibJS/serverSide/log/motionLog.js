'use strict';

var Console = require('console').Console;
var motionMail = require('../../motionMail/motionMail')
var fs = require('fs');
var accountsLog = {};

var motionLog = function () {
};

motionLog.getAccountLog = function (accountId) {
    if (!accountsLog.hasOwnProperty(accountId)) {
        var output = fs.createWriteStream('logs/' + accountId + '_stdout.log', { 'flags': 'a' });
        var errorOutput = fs.createWriteStream('logs/' + accountId + '_stderr.log', { 'flags': 'a' });
        accountsLog[accountId] = new Console(output, errorOutput);
    }
    return accountsLog[accountId];
};

motionLog.log = function (accountId, message) {
    var now = new Date();
    motionLog.getAccountLog(accountId).log(now.toString(), " => ", message);
};

motionLog.assert = function (accountId, assertion, message) {
    var now = new Date();
    try {
        motionLog.getAccountLog(accountId).assert(assertion, now.toString(), " => ", message);
    } catch (err) {
        motionLog.getAccountLog(accountId).error(now.toString(), " => ", err.stack);
    }
};

motionLog.error = function (accountId, message) {
    var now = Date();
    console.error(now.toString(), " => ", message);
    motionLog.getAccountLog(accountId).error(now.toString(), " => ", message);
};

motionLog.errorStdout = function (message) {
    var now = Date();
    console.error(now.toString(), " => ", message);
};

motionLog.errorWithMail = function (accountId, subject ,message,callBack) {
    var now = Date();
    //var message = "....";
    console.error(now.toString()," => ", message);
    callBack(now.toString()," => ", message);
    
    /*
    motionMail.setMailTo("fernando.arbelo@gmail.com");
    motionMail.sendMail(subject, message, "fernando.arbelo@gmail.com", function (resultMail) {
        console.error(now.toString(), " => ", message);
        motionLog.getAccountLog(accountId).error(now.toString(), " => ", message);
        callBack(resultMail);
    }, function (errMail) {
        var accountLog = motionLog.getAccountLog(accountId);
        accountLog.error(now.toString(), " => ", errMail.toString());
       // accountLog.error(now.toString());
        motionLog.getAccountLog(accountId).error(now.toString(), " => ", message.toString());
        callBack(errMail);
    });
    */
};

module.exports = motionLog;