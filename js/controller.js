angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to the Fictitious Greengrocer";

        // start carousel
        $('#carousel-example-generic').carousel({
            interval: 6000
        });
    })
    .controller('ProduceController', function($scope, ProductJsonService) {

        $scope.data = {
            show: false
        };

        $('#shareButton').click(function() {
            $('#fictionModal').modal('show');
        });
        
        $scope.test = function(id) {
            console.log(id);
            $(id).modal('show');
            //$scope.show = "true"; // angular alternative
        };

        $scope.productdetails = {};
        var URL = "http://localhost:8080/products.json";
        ProductJsonService.getProducts(URL).then(function(results) {
            $scope.productdetails = results.data;
            //console.log($scope.productdetails);
        }).catch(function(err) {
            console.dir("Error:", err);
        });

    })
    .controller('BoxesController', function($scope) {
        $('#orderFruitBox').click(function() {
            $('#fruitBoxModal').modal('show');
        });
        $scope.boxCustomer = {};
        $scope.submitForm = function() {
            if ($scope.fruitboxForm.$valid) {
                $scope.boxCustomer.name = $scope.customer.name;
                $scope.boxCustomer.email = $scope.customer.email;
                $scope.boxCustomer.phone = $scope.customer.phone;
            }
            console.log($scope.boxCustomer.name, $scope.boxCustomer.email, $scope.boxCustomer.phone);
        }
    })
    .controller('NewsController', function($scope) {
        $scope.newsletterUser = {};
        $scope.submitForm = function() {
            if ($scope.newsletterForm.$valid) {
                $scope.newsletterUser.username = $scope.subscriber.name;
                $scope.newsletterUser.email = $scope.subscriber.email;
            }
            console.log($scope.newsletterUser.username, $scope.newsletterUser.email);
        }
    })
    .controller('ContactController', function($scope) {
        $('#contactFormButton').click(function() {
            $('#contactModal').modal('show');
        });
    })
    .controller('NoFunctionModalController', function($scope) {
        $('.socialLogo').click(function() {
            $('#fictionModal').modal('show');
        });
    })
;