if (Meteor.isClient) {

    Tinytest.add("basic - alt exists", function(test) {
        test.equal(typeof alt, "object");
    });

    Tinytest.add("basic - Alt exists", function(test) {
        test.equal(typeof Alt, "function");
    });

}

