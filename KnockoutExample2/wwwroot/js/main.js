
require.config({
    baseUrl: "js",
    paths: {
        knockout: "lib/knockout/knockout-latest.debug"
    }

});


require(['knockout', 'viewModel'], function(ko, vm) {
    ko.applyBindings(vm);
});