/*
 *
 * Copyright (C) MotionSoft Consulting S.R.L. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Ing. Pablo Rivero <privero@motionsoft.com.uy>
 *
 */

function Account(id,name,owner,databaseName,userId){
    this.id = id;
    this.name= name;
    this.owner = owner;
    this.databaseName = databaseName;
    this.userId = userId;
}

module.exports = Account;
