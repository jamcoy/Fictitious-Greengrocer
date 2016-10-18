angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $('#fggCarousel').carousel({ interval: 6000 }); // workaround to start carousel
    })

    .controller('ProduceController', function($scope, ProductJsonService) {
        $scope.showProduct = 'fruit'; // show fruit initially
        $scope.productModal = {};
        $scope.productModal.imageFile = "/img/loading.png";
        $scope.productdetails = [];
        // Change IP address to wherever deployed.  Can't use localhost - it won't be reachable for non-local clients.
        var URL = "http://192.168.148.167:8080/data/products.json";
        //var URL = "http://192.168.43.46:8080//data/products.json";
        ProductJsonService.getProducts(URL).then(function(results) {
            $scope.productdetails = results.data;
        }).catch(function(err) {
            console.log("ProductJsonService.getProducts(URL) error:", err);
        });
    })

    .controller('BoxesController', function($scope) {
        $scope.boxCustomer = {};
        $scope.submitForm = function() {
            if ($scope.fruitboxForm.$valid) {
                $scope.boxCustomer.subs = $scope.customer.subs;
                $scope.boxCustomer.day = $scope.customer.day;
                $scope.boxCustomer.slot = $scope.customer.slot;
                $scope.boxCustomer.boxType = $scope.customer.boxType;
                $scope.boxCustomer.name = $scope.customer.name;
                $scope.boxCustomer.email = $scope.customer.email;
                $scope.boxCustomer.phone = $scope.customer.phone;
                $scope.boxCustomer.address = $scope.customer.address;
            }
            console.log($scope.boxCustomer);
        };
    })

    .controller('NewsController', function($scope) {
        $scope.newsletterUser = {};
        $scope.submitForm = function() {
            if ($scope.newsletterForm.$valid) {
                $scope.newsletterUser.username = $scope.subscriber.name;
                $scope.newsletterUser.email = $scope.subscriber.email;
                $scope.newsletterResponse = "You entered: " + $scope.newsletterUser.username + ", "
                    + $scope.newsletterUser.email;
                $scope.subscriptionSubmitted = true;
            }
        };
    })

    .controller('ContactController', function($scope) {
        $scope.contactUser = {};
        $scope.submitForm = function () {
            if ($scope.contactForm.$valid) {
                $scope.contactUser.username = $scope.contactor.name;
                $scope.contactUser.email = $scope.contactor.email;
                $scope.contactUser.message = $scope.contactor.message;
                $scope.contactResponse = "You entered: " + $scope.contactUser.username + ", " + $scope.contactUser.email
                    + ", " + $scope.contactUser.message;
                $scope.messageSubmitted = true;
            }
        };
    })

    .controller('NavbarController', function($scope, $location) {
        $scope.isActive = function(currentLocation) {
            return currentLocation === $location.path(); // return true or false
        };
    })

;