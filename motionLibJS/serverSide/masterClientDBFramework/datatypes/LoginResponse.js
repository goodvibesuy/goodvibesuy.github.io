/*
 *
 * Copyright (C) MotionSoft Consulting S.R.L. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Ing. Pablo Rivero <privero@motionsoft.com.uy>
 *
 */

function LoginResponse(user, result, message, multiAccount,accounts){    
    this.user= user;
    this.result=result;
    this.message= message;
    this.multiAccount = multiAccount;
    this.accounts = accounts;
}
module.exports = LoginResponse;

