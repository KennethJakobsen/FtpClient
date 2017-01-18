app.directive("localFolder", function ($compile) {
    function link(scope, element, attrs) {

        var folder =
            "<ul><li local-folder data-folder="+ attrs.folder + "><li></ul>";

        element.on('$destroy', function () {
        });
        element.html('').append($compile(folder)(scope));

    }

    return {
        restrict: "A",
        link: link

    };
});
