/* 
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */


var mappingUtils = function() {

};


mappingUtils.convertToMatriz = function(nFilas, nColumnas, datos) {    
    
    var matriz = [];
    var indexMatriz = 0;
    for (var i = 0; i < nFilas; i++) {
        matriz[i] = [];
        for (var j = 0; j < nColumnas; j++) {
            matriz[i][j] = datos[indexMatriz];
            indexMatriz++;
        }
    }
    return matriz;
};


mappingUtils.convertToMatrizByPath = function(obj,path) {
    path = path.split('.');
    
    for (i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];
    
    if(obj[path[i]] != undefined){        
        obj[path[i]] = mappingUtils.convertToMatriz(obj[path[i]].nFilas,
                                obj[path[i]].nColumnas,
                                obj[path[i]].datos
                            );        
    }
};


module.exports = mappingUtils;