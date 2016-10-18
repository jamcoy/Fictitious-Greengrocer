angular.module('DataService', [])
    .factory('JsonService', function($http) {

        JsonService = {
            getJson: function(url) {
                return $http.get(url);
            }
        };
        return JsonService;
    })
;