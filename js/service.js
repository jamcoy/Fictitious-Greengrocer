angular.module('DataService', [])
    .factory('JsonService', function($http) {

        JsonService = {
            getProducts: function(url) {
                return $http.get(url);
            }
        };
        return JsonService;
    })
;