/*
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */

function ArrayUtils(){

    this.defaultSort = function(array,desc){
            array.sort(function(a, b){
            if(a < b)
                if (desc)
                    return 1;
                else
                    return -1;
            if(a > b)
                if (desc)
                    return -1;
                else
                    return 1;
            return 0;
        });
    };
};

module.exports= new ArrayUtils();