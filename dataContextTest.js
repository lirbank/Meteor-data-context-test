if (Meteor.isClient) {

  // Just some data
  Template.MainTemplate.helpers({
    dataOuter: function () {
      return {id: 'foo'};
    },
    dataInner: function () {
      return {id: 'bar'};
    }
  });

  // Event handler - used by both button 1 and button 2.
  let handler = function (event, template) {

    // This returns the current data for both buttons (ok).
    console.log('Current Data:', this);

    // The PARENT data context can't be accessed via button 1 (bad).
    console.log('Parent Data: ', Template.parentData());

    /*
    // The following four lines does not work with button 1 either, but 'this'
    // can be used instead so not the real concern.
    console.log('Current Data:', Template.instance().data);
    console.log('Current Data:', Template.currentData());
    console.log('Current Data:', Template.parentData(0));
    console.log('Current Data:', template.data);
    */
  };

  // Button in the MainTemplate
  Template.MainTemplate.events({
    'click button#button1': handler
  });

  // Button in the separate ButtonTemplate
  Template.ButtonTemplate.events({
    'click button#button2': handler
  });

}
