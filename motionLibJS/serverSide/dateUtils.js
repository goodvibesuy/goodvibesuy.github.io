/* 
 *  Copyright (C) MotionSoft Consulting SRL, Inc - All Rights Reserved
 *  Unauthorized copying, modify o redistribution of this file, via any medium is strictly prohibited
 *  Proprietary and confidential.
 */

function DateUtils() {

    this.fechaToService = function() {
        var _fecha = new Date();
        var anio = _fecha.getFullYear();
        var mes = _fecha.getMonth() + 1;
        var dia = _fecha.getDate();
        var hora = _fecha.getHours();
        var minuto = _fecha.getMinutes();

        if (dia < 10)
            dia = "0" + dia;

        if (mes < 10)
            mes = "0" + mes;

        if (hora < 10)
            hora = "0" + hora;

        if (minuto < 10)
            minuto = "0" + minuto;

        return anio + "-" + mes + "-" + dia + " " + hora + ":" + minuto;
    };

    //TODO unificar las dos funciones
    this.fechaToServiceClimatUTC = function(){        
        var _fecha = new Date();        
        _fecha.setMonth(_fecha.getUTCMonth() - 1);    
        var anio = _fecha.getFullYear();
        var mes = _fecha.getMonth() + 1 ;
        var dia = _fecha.getDate();
        var hora = _fecha.getUTCHours();
        var minuto = _fecha.getMinutes();

        if (dia < 10)
            dia = "0" + dia;

        if (mes < 10)
            mes = "0" + mes;

        if (hora < 10)
            hora = "0" + hora;

        if (minuto < 10)
            minuto = "0" + minuto;       

        return anio + "-" + mes + "-" + dia + " " + hora + ":" + minuto;
    };
    
    
    this.fechaUTCString = function(){
        var _fecha = new Date();
        var anio = _fecha.getFullYear();
        var mes = this.convertirADosCifras(_fecha.getMonth() + 1 );
        var dia = this.convertirADosCifras(_fecha.getDate());

        return anio + "-" + mes + "-" + dia;
    };

    this.convertirADosCifras = function(valor){
        if (valor < 10)
            valor = "0" + valor;
        return valor;
    };


};

module.exports = new DateUtils();