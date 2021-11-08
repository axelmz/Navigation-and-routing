sap.ui.define([
  "navrout/controller/BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("navrout.controller.Home", {
    onDisplayNotFound: function () {
      //display the "notFound" target without changing the hash
      this.getRouter().getTargets().display("notFound", {
        fromTarget: "home"
      });
    },
    onNavToEmployees: function () {
      this.getRouter().navTo("employeeList");
    }
  });

});