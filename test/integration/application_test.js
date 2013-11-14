module("Application", {
  setup: function() {
    Ember.run(Salondeluxe, Salondeluxe.advanceReadiness);
  },
  teardown: function() {
    Salondeluxe.reset();
  }
});

test("Application was rendered", function() {
  visit("/").then(function() {
    ok(exists(".container"), "Application was rendered.");
  });
});