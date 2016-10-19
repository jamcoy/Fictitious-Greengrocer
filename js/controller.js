angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, JsonService) {
        $('#fggCarousel').carousel({ interval: 6000 }); // workaround to start carousel

        //var URL = "http://localhost:8080/data/news.json";
        var URL = "https://stream1.jamcoy.com/data/news.json";
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
        //var URL = "http://localhost:8080/data/products.json";
        var URL = "https://stream1.jamcoy.com/data/products.json";
        JsonService.getJson(URL).then(function(results) {
            $scope.productdetails = results.data;
        }).catch(function(err) {
            console.log("JsonService.getJson(", URL, ") error:", err);
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
            var quote, price;
            if ($scope.boxCustomer.boxType == "Maxi" && $scope.boxCustomer.subs == "true") {
                price = "£49.99 per week, including FREE delivery.";
            } else if ($scope.boxCustomer.boxType == "Maxi") {
                price = "£49.99 + £10.00 delivery.";
            } else if ($scope.boxCustomer.boxType == "Medium" && $scope.boxCustomer.subs == "true") {
                price = "£29.99 per week + £5.00 per week delivery."
            } else if ($scope.boxCustomer.boxType == "Medium") {
                price = "£29.99 + £8.00 delivery.";
            } else if ($scope.boxCustomer.subs == "true") {
                price = "£19.99 per week + £5.00 per week delivery.";
            } else {
                price = "£19.99 + £7.00 delivery.";
            }
            if ($scope.boxCustomer.subs == "true") {
                quote = "You requested a weekly subscription for a " + $scope.boxCustomer.boxType
                    + " fruit box to be delivered to " + $scope.boxCustomer.address + " every " + $scope.boxCustomer.day
                    + " from " + $scope.boxCustomer.slot + ".  This will cost you " + price;
            } else {
                quote = "You requested a single order of a " + $scope.boxCustomer.boxType
                    + " fruit box to be delivered to " + $scope.boxCustomer.address + " on " + $scope.boxCustomer.day
                    + " from " + $scope.boxCustomer.slot + ".  This will cost you " + price;
            }
            $scope.orderSubmitted = true;
            $scope.quote = quote;
        };
    })

    .controller('NewsController', function($scope, JsonService) {


        //var URL = "http://localhost:8080/data/news.json";
        var URL = "https://stream1.jamcoy.com/data/news.json";
        JsonService.getJson(URL).then(function(results) {
            $scope.news = results.data;
        }).catch(function(err) {
            console.log("JsonService.getJson(", URL, ") error:", err);
        });


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