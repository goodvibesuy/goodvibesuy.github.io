/*
 *
 * Copyright (C) MotionSoft Consulting S.R.L. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Ing. Pablo Rivero <privero@motionsoft.com.uy>
 *
 */

var sqlInsertBuilderVar = function SQLInsertBuilder(dbName,tableName,fieldsValueMap){    
    var sqlStrFields = '(';
    var sqlStrValues = '(';
    var sqlGapValues = "";
    
    for (i = 0; i < fieldsValueMap.fieldNames.length; i++){        
        sqlStrFields= sqlStrFields + fieldsValueMap.fieldNames[i]+',';
        // sqlStrValues= sqlStrValues + fieldsValueMap.map[i].fieldValue+',';
        sqlGapValues += "?";
        if(i < fieldsValueMap.fieldNames.length - 1){
            sqlGapValues += ",";
        }
    }
    // delete colon and close brackets
    sqlStrFields= sqlStrFields.substring(0,sqlStrFields.length-1)+")";
    sqlStrValues= sqlStrValues.substring(0,sqlStrValues.length-1)+")";  
    return 'insert into '+dbName+'.'+tableName+' '+sqlStrFields+' values ('+ sqlGapValues +')';    
};

module.exports = sqlInsertBuilderVar;

