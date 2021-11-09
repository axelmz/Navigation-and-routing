sap.ui.define([
		"navrout/controller/BaseController",
		"sap/base/Log"
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Log) {
		"use strict";

		return BaseController.extend("navrout.controller.Main", {
			onInit: function () {
				// This is ONLY for being used within the tutorial.
				// The default log level of the current running environment may be higher than INFO,
				// in order to see the debug info in the console, the log level needs to be explicitly
				// set to INFO here.
				// But for application development, the log level doesn't need to be set again in the code.
				Log.setLevel(Log.Level.INFO);

				var oRouter = this.getRouter();

				oRouter.attachBypassed(function (oEvent) {
					var sHash = oEvent.getParameter("hash");
					// do something here, i.e. send logging data to the backend for analysis
					// telling what resource the user tried to access...
					Log.info("Sorry, but the hash '" + sHash + "' is invalid.", "The resource was not found.");
				});
			}
		});
	});