﻿angular.module('ngBoilerplate.customer', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config($stateProvider) {
    $stateProvider.state('customer', {
        url: '/customers/:customerIndex',
        views: {
            "main": {
                controller: 'customerController',
                templateUrl: 'customer/customer.tpl.html'
            }
        },
        data: { pageTitle: 'customer' }
    });
})

.controller('customerController', function customerController($scope, $stateParams, $http) {

     var index = $stateParams.customerIndex;
     $http.get('assets/Customers.json').success(function (data) {
         $scope.customer = data[index];
     });
});
