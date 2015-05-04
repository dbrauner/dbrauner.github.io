sap.ui.controller("view.device_info", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.device_info
*/
	onInit: function() {
	    
	    var browser_name = this.getBrowserName(sap.ui.Device.browser.name);
	    var os_name = this.getOSName(sap.ui.Device.os.name);
	    var system_name;
	    
	    
	    system_name = this.getGenericName(
	        true,
	        sap.ui.Device.system
	        );
	        
	    sap.ui.getCore()
	           .byId("txv_device_info")
	           .setText(
	               "Browser: " + browser_name + "\n" + "OS: " + os_name + "\n" + "System Name: " + system_name);

	},
	
	getBrowserName: function(browser_short_name) {
	    for (var browser_name in sap.ui.Device.browser.BROWSER) {
	        if (browser_short_name == sap.ui.Device.browser.BROWSER[browser_name]) {
	            return browser_name.toLowerCase();
	        }
	    }
	},
/**
* Given a OS abbreviation, get its name
*/
    getOSName: function(os_short_name){
        for ( var osName in sap.ui.Device.os.OS) {
            if (os_short_name == sap.ui.Device.os.OS[osName]) {
                return osName.toLowerCase();
            }
        }
    },	    
    
    
    getGenericName: function(stuff_short_name, stuff_enum){
        for ( var stuffName in stuff_enum) {
            if (stuff_short_name == stuff_enum[stuffName]) {
                return stuffName.toLowerCase();
            }
        }
    }
	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.device_info
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.device_info
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.device_info
*/
//	onExit: function() {
//
//	}

});