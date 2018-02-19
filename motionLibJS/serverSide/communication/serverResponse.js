/*
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */

function ServerResponse(){
    this.sendResponse = function(response, code, data, message){
        response.status(code).
            send({"message":message,"data":data}).end();

        return;
    };
}

module.exports = new ServerResponse();
