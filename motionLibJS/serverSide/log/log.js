/*
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */


function Log(){

    this.getDateLog= function(){
        var now = new Date();
       
        return '['+now.toISOString()+']';
    };

    this.createLogString= function(message){
        return this.getDateLog()+ ' ' + message;
    };

    this.e = function(message){
        console.error(this.createLogString(message));
    };

    this.w = function(message){
        console.warn(this.createLogString(message));
    };

    this.i = function(message){
        console.info(this.createLogString(message));
    };

    this.d = function(message){
        console.log(this.createLogString(message));
    };
};

module.exports = new Log();

