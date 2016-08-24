(function () {
    'use strict';

    angular
        .module('productManagement')
        .factory('productResource',
                ['$resource',
                productResource]);

    function productResource($resource) {
        return $resource('/api/v1/products/:id');
    }

}());
