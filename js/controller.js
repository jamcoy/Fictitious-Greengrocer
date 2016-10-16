angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to the Fictitious Greengrocer";

        // start carousel
        $('#carousel-example-generic').carousel({
            interval: 6000
        });
    })
    .controller('ProduceController', function($scope, ProductJsonService) {

        $scope.productdetails = {};
        // Change IP address to wherever deployed.  Can't use localhost - it won't be reachable for non-local clients.
        var URL = "http://192.168.148.167:8080/products.json";
        ProductJsonService.getProducts(URL).then(function(results) {
            $scope.productdetails = results.data;
        }).catch(function(err) {
            console.dir("Error:", err);
        });

        $scope.showProductModal = function(name, description, filename) {
            var modal =  $('#detail');
            modal.find('.detailTitle').text(name);
            modal.find('.detailDescription').text(description);
            var source = "/img/produce/fruit/" + filename;
            modal.find('.productImage').attr("src",source);
            modal.find('.productImage').attr("alt",name);
            modal.modal('show');
        };

        $('#shareButton').click(function() {
            $('#detail').modal('hide');
            $('#fictionModal').modal('show');
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