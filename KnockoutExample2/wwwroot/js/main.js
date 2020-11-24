
require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug"
    }

});


require(['knockout'], function(ko) {
    ko.applyBindings({});
});