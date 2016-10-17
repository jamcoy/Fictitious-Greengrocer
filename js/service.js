angular.module('ProductService', [])
    .factory('ProductJsonService', function($http) {

        ProductJsonService = {
            getProducts: function(url) {
                return $http.get(url);
            }
        };
        return ProductJsonService;
    })
;