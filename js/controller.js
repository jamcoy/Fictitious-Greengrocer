angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        //$scope.title = "Welcome to the Fictitious Greengrocer";

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
        //var URL = "http://192.168.148.167:8080/products.json";
        var URL = "http://192.168.43.46:8080/products.json";
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
            $('#customText').text("");
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
                $('#fictionModal').modal('show');
                var text = "You entered: " + $scope.newsletterUser.username + ", " + $scope.newsletterUser.email;
                $('#customText').text(text);
            }

        }
    })

    .controller('ContactController', function($scope) {
        $scope.contactUser = {};
        $scope.submitForm = function () {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.username = $scope.contactor.name;
                $scope.contactUser.email = $scope.contactor.email;
                $scope.contactUser.message = $scope.contactor.message;
                console.log($scope.contactUser.username, $scope.contactUser.email, $scope.contactUser.message);
                var text = "You entered: " + $scope.contactUser.username + ", " + $scope.contactUser.email + ", " + $scope.contactUser.message;
                $('#contactModal').modal('hide');
                $('#customText').text(text);
                $('#fictionModal').modal('show');
            }
        }



        $('#contactFormButton').click(function() {
            $('#contactModal').modal('show');
            $('#customText').text("");
        });
    })

    .controller('NoFunctionModalController', function($scope) {
        $('.socialLogo').click(function() {
            $('#fictionModal').modal('show');
            $('#customText').text("");
        });
    })

    .controller('NavbarController', function($scope, $location) {
        $scope.isActive = function(currentLocation) {
            return currentLocation === $location.path(); // return true or false
        };
    })

;