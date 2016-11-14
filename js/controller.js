// If running locally, change the url prefix to "http://localhost:8080"
var URLprefix = "https://stream1.jamcoy.com";

angular.module('RouteControllers', [])

    .controller('HomeController', function($scope, JsonService) {
        $('#fggCarousel').carousel({ interval: 6000 }); // workaround to start carousel

        var URL = URLprefix + "/data/news.json";
        JsonService.getJson(URL).then(function(results) {
            $scope.news = results.data;
        }).catch(function(err) {
            console.log("JsonService.getJson(", URL, ") error:", err);
        });

    })

    .controller('ProduceController', function($scope, JsonService) {
        $scope.showProduct = 'fruit'; // show fruit initially
        $scope.productModal = {};
        $scope.productModal.imageFile = "/img/loading.png";
        $scope.productdetails = [];

        var URL = URLprefix + "/data/products.json";
        JsonService.getJson(URL).then(function(results) {
            $scope.productdetails = results.data;
        }).catch(function(err) {
            console.log("JsonService.getJson(", URL, ") error:", err);
        });
    })

    .controller('BoxesController', function($scope) {
        var boxCustomer = {};
        $scope.submitForm = function() {
            if ($scope.fruitboxForm.$valid) {
                boxCustomer.subs = $scope.customer.subs;
                boxCustomer.day = $scope.customer.day;
                boxCustomer.slot = $scope.customer.slot;
                boxCustomer.boxType = $scope.customer.boxType;
                boxCustomer.name = $scope.customer.name;
                boxCustomer.email = $scope.customer.email;
                boxCustomer.phone = $scope.customer.phone;
                boxCustomer.address = $scope.customer.address;
            }
            var quote, price;
            if (boxCustomer.boxType == "Maxi" && boxCustomer.subs == "true") {
                price = "£49.99 per week, including FREE delivery.";
            } else if (boxCustomer.boxType == "Maxi") {
                price = "£49.99 + £10.00 delivery.";
            } else if (boxCustomer.boxType == "Medium" && boxCustomer.subs == "true") {
                price = "£29.99 per week + £5.00 per week delivery."
            } else if (boxCustomer.boxType == "Medium") {
                price = "£29.99 + £8.00 delivery.";
            } else if (boxCustomer.subs == "true") {
                price = "£19.99 per week + £5.00 per week delivery.";
            } else {
                price = "£19.99 + £7.00 delivery.";
            }
            if (boxCustomer.subs == "true") {
                quote = "You requested a weekly subscription for a " + boxCustomer.boxType
                    + " fruit box to be delivered to " + boxCustomer.address + " every " + boxCustomer.day
                    + " from " + boxCustomer.slot + ".  This will cost you " + price;
            } else {
                quote = "You requested a single order of a " + boxCustomer.boxType
                    + " fruit box to be delivered to " + boxCustomer.address + " on " + boxCustomer.day
                    + " from " + boxCustomer.slot + ".  This will cost you " + price;
            }
            $scope.orderSubmitted = true;
            $scope.quote = quote;
        };
    })

    .controller('NewsController', function($scope, JsonService) {

        var URL = URLprefix + "/data/news.json";
        JsonService.getJson(URL).then(function(results) {
            $scope.news = results.data;
        }).catch(function(err) {
            console.log("JsonService.getJson(", URL, ") error:", err);
        });


        var newsletterUser = {};
        $scope.submitForm = function() {
            if ($scope.newsletterForm.$valid) {
                newsletterUser.username = $scope.subscriber.name;
                newsletterUser.email = $scope.subscriber.email;
                $scope.newsletterResponse = "You entered: " + newsletterUser.username + ", " + newsletterUser.email;
                $scope.subscriptionSubmitted = true;
            }
        };
    })

    .controller('ContactController', function($scope) {
        var contactUser = {};
        $scope.submitForm = function () {
            if ($scope.contactForm.$valid) {
                contactUser.username = $scope.contactor.name;
                contactUser.email = $scope.contactor.email;
                contactUser.message = $scope.contactor.message;
                $scope.contactResponse = "You entered: " + contactUser.username + ", " + contactUser.email + ", "
                    + contactUser.message;
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