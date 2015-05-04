jQuery.sap.declare("sap.ui.demo.myFiori.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

sap.ui.demo.myFiori.util.Formatter = {
    date : function (value) {
        if (value) {
            var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance(
                {
                    pattern: "dd-MM-yyyy"
                }
            );
            return oDateFormat.format(new Date(value)); 
        } else {
            return value;
        }
    }
};