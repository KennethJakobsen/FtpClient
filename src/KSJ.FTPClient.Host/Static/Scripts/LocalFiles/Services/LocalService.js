app.service("LocalSvc", ["$http", "$q", function ($http, $q) {
    this.GetInitialFolder = function () {
        return $http.get("/api/LocalFileSystem/");

    };
    this.GetFolderEntries = function (folder) {
        return $http.get("/api/LocalFileSystem/" + encodeURI(folder));

    };
}]);