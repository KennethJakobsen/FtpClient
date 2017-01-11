app.controller("LocalController", ["$scope", "LocalSvc", function ($scope, svc) {
        $scope.entries = new Array();
    svc.GetInitialFolder().success(function (response) {
        angular.forEach(response, function (value, key) {
            $scope.entries.push(value);
        });
    });
    $scope.GetFolder = function(folder) {
            svc.GetFolderEntries(folder).success(function(response) {
                angular.forEach(response,
                    function(value, key) {
                        $scope.entries.push(value);
                    });
            });
        }
    }
]);