sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function (Controller) {
  'use strict'
  return Controller.extend('application.views.Main', {
    onInit: function () {
      console.log('onInit')
    }
  })
})
