describe('Test suite for application.views.Main', function () {
  var view, controller

  beforeEach(function () {
    // Create a generic view
    view = new sap.ui.core.mvc.View({})
    // Create the controller under test
    controller = sap.ui.controller('application.views.Main')
    // Link the controller up to the view
    spyOn(controller, 'getView').and.returnValue(view)
  })

  describe('A suite', function () {
    it('contains spec with an expectation', function () {
      expect(true).toBe(true)
    })
  })
})
