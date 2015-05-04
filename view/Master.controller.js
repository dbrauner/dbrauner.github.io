sap.ui.controller("sap.ui.demo.myFiori.view.Master", {

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},
	
	onSearch : function (evt) {
	    var filters = [];
	    var query = evt.getParameter("query");
	    
	    if (query && query.length > 0 ) {
	        
	        var filter = new sap.ui.model.Filter("SoId", sap.ui.model.FilterOperator.Contains, query);
	        filters.push(filter);
	        
	    }
	    var list = this.getView().byId("list");
	    
	    var binding = list.getBinding("items");
	    
	    binding.filter(filters);
	    
	}
});