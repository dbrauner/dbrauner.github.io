sap.ui.jsview("view.device_info", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.device_info
	*/ 
	getControllerName : function() {
		return "view.device_info";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.device_info
	*/ 
	createContent : function(oController) {
		return new sap.ui.commons.TextView("txv_device_info");
		}
	

});
