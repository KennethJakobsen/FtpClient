app.controller("LocalController", ["$scope", "LocalSvc", function ($scope, svc) {
    $scope.entries = new Array();
    $scope.hub = $.connection.localFileSystemHub;
    
    
    $scope.watchedFolders = new Array();


    svc.GetInitialFolder().success(function (response) {
        angular.forEach(response, function (value, key) {
            $scope.entries.push(value);
        });
    });
    $scope.updateFolder = function (folder) {

        angular.forEach($scope.watchedFolders,
               function (value, key) {
                   if (value.path === folder)
                       $scope.SetFolderEntries(value);
               });
    };
    $scope.GetFolder = function (entry) {
        if (entry.isFile === true)
            return;
        $scope.watchedFolders.push(entry);
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