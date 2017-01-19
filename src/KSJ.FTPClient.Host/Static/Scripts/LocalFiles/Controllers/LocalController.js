app.controller("LocalController", ["$scope", "LocalSvc", function ($scope, svc) {
    $scope.entryPoint = { path: "", entries: [] };
    $scope.hub = $.connection.localFileSystemHub;



    svc.GetInitialFolder().success(function (response) {
        angular.forEach(response, function (value, key) {
            $scope.entryPoint.entries.push(value);
        });
    });
    $scope.updateFolder = function (msg) {


        if (msg.eventType === 3) {
            var fldr = $scope.findEntryRecursive(msg.watchedFolder, $scope.entryPoint, null);
            if (fldr !== undefined && fldr !== null) {
                if (!fldr.element.entries)
                    fldr.element.entries = [];
                fldr.element.entries.push(msg.changedEntry);
            }
        } else {
            var elm = $scope.findEntryRecursive(msg.originalPath, $scope.entryPoint, null);
            if (elm !== undefined && elm !== null) {
                if (msg.eventType === 2)
                    $scope.removeFromArray(elm.parent.entries, elm.element);
                else {
                    elm.element.path = msg.changedEntry.path;
                    elm.element.size = msg.changedEntry.size;
                    elm.element.name = msg.changedEntry.name;
                    elm.element.lastEdited = msg.changedEntry.lastEdited;
                }
            }
        }
        $scope.$apply();
    };
    $scope.removeFromArray = function(arr, elm) {
        var idx = 0;
        angular.forEach(arr, function (value, key) {
            if (value.path === elm.path)
                idx = key;
        });
        arr.splice(idx, 1);
    }
    $scope.findEntryRecursive = function (path, elm, par) {

        if (elm.path === path) {
            return { parent: par, element: elm };
        } else if (elm.entries != null) {
            var i;
            var result = null;
            for (i = 0; result == null && i < elm.entries.length; i++) {
                result = $scope.findEntryRecursive(path, elm.entries[i], elm);
            }
            return result;
        }
        return null;
    }
    $scope.GetFolder = function (entry) {
        if (entry.isFile === true)
            return;
        $scope.SetFolderEntries(entry);

    }

    $scope.SetFolderEntries = function (entry) {
        entry.entries = [];
        svc.GetFolderEntries(entry.path).success(function (response) {
            angular.forEach(response,
                function (value, key) {
                    entry.entries.push(value);
                });
        });

    }
    $scope.hub.client.publishFolderUpdated = $scope.updateFolder;
    $.connection.hub.start();
}
]);