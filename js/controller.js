angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome to the Fictitious Greengrocer";

        // start carousel
        $('#fggCarousel').carousel({
            interval: 6000
        });
    })

    .controller('ProduceController', function($scope, ProductJsonService) {

        // show fruit initially
        $scope.showFruit = true;

        $scope.switchProduct = function(type) {
            $('#fruitButton').button('toggle');
            $('#vegButton').button('toggle');
            $('#otherButton').button('toggle');
            switch(type) {
                case "fruit":
                    $scope.showFruit = true;
                    $scope.showVeg = false;
                    $scope.showOther = false;
                    break;
                case "veg":
                    $scope.showFruit = false;
                    $scope.showVeg = true;
                    $scope.showOther = false;
                    break;
                case "other":
                    $scope.showFruit = false;
                    $scope.showVeg = false;
                    $scope.showOther = true;
                    break;
            }
        };

        $scope.productdetails = [];
        // Change IP address to wherever deployed.  Can't use localhost - it won't be reachable for non-local clients.
        var URL = "http://192.168.148.167:8080/products.json";
        ProductJsonService.getProducts(URL).then(function(results) {
            $scope.productdetails = results.data;
        }).catch(function(err) {
            console.dir("JC error:", err);
        });

        $scope.showProductModal = function(name, description, filename) {
            var modal =  $('#detail');
            modal.find('.detailTitle').text(name);
            modal.find('.detailDescription').text(description);
            var source = "/img/produce/" + filename;
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

    .controller('NavbarController', function($scope, $location) {
        $scope.isActive = function(currentLocation) {
            return currentLocation === $location.path(); // return true or false
        };
    })

;