/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Control'],function(q,l,C){"use strict";var T=C.extend("sap.m.Token",{metadata:{library:"sap.m",properties:{selected:{type:"boolean",group:"Misc",defaultValue:false},key:{type:"string",group:"Misc",defaultValue:""},text:{type:"string",group:"Misc",defaultValue:""},editable:{type:"boolean",group:"Misc",defaultValue:true},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit}},aggregations:{deleteIcon:{type:"sap.ui.core.Icon",multiple:false,visibility:"hidden"}},events:{"delete":{},press:{},select:{}}}});T.prototype.init=function(){this._deleteIcon=new sap.ui.core.Icon({src:"sap-icon://sys-cancel"});this._deleteIcon.addStyleClass("sapMTokenIcon");this.setAggregation("deleteIcon",this._deleteIcon);};T.prototype.setEditable=function(e){this.setProperty("editable",e);if(e){this.removeStyleClass("sapMTokenReadOnly");}else{this.addStyleClass("sapMTokenReadOnly");}};T.prototype.ontouchstart=function(e){this.$().toggleClass("sapMTokenActive",true);if(sap.ui.Device.system.desktop&&e.originalEvent.button!==0){return;}this._oSrcStartId=e.target.id;if(this._oSrcStartId===this._deleteIcon.getId()){e.preventDefault();}};T.prototype.setSelected=function(s,m){if(s&&!m){this.focus();}var $=this.$();if($){if(s){$.addClass("sapMTokenSelected");}else{$.removeClass("sapMTokenSelected");}}else{if(s){this.addStyleClass("sapMTokenSelected");}else{this.removeStyleClass("sapMTokenSelected");}}this.setProperty("selected",s,true);if(s){this.fireSelect();}};T.prototype._onTokenPress=function(){var s=this.getSelected();this.setSelected(!s);if(!s){this.fireSelect({});}};T.prototype.ontap=function(e){this._onTokenPress();};T.prototype.ontouchend=function(e){this.$().toggleClass("sapMTokenActive",false);var s=e.target;if(this._oSrcStartId!==s.id){delete this._oSrcStartId;return;}var t=sap.m.MultiInput.prototype._bDoTouchScroll;var b=false;if(t&&this.getSelected()){b=true;}if(s.id===this._deleteIcon.getId()){if(b||!t){this.fireDelete({token:this});}else{this.firePress({token:this});}e.preventDefault();}else{this.firePress({token:this});e.preventDefault();}delete this._oSrcStartId;};T.prototype.onsapfocusleave=function(e){this.setSelected(false);};T.prototype.onsapbackspace=function(e){e.preventDefault();e.stopPropagation();if(this.getSelected()&&this.getEditable()){this.fireDelete({token:this});}};T.prototype.onsapdelete=function(e){if(this.getEditable()){this.fireDelete({token:this});}e.preventDefault();};T.prototype.onsapspace=function(e){this._onTokenPress();if(e){e.preventDefault();e.stopPropagation();}};T.prototype.onkeydown=function(e){if((e.ctrlKey||e.metaKey)&&e.which===q.sap.KeyCodes.SPACE){this.onsapspace(e);e.preventDefault();}};return T;},true);
