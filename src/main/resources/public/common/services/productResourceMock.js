(function () {
    "use strict";

    var app = angular
        .module("productResourceMock",
                ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var products = [
            {

                "id": 1,
                "name": "Peaceful Warrior",
                "description": "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                "price": 12.6,
                "date": 1472042610702,
                "category": 1,
                "weight": 0.5,
                "image": "peaceful_warrior.jpg",
                "identity": "peaceful-warrior",
                "metaTitle": "Peaceful Warrior (2006)",
                "metaDescription": "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."

            },
            {

                "id": 2,
                "name": "Peaceful",
                "description": "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                "price": 12.6,
                "date": 1472042610702,
                "category": 1,
                "weight": 0.5,
                "image": "peaceful_warrior.jpg",
                "identity": "peaceful-warrior",
                "metaTitle": "Peaceful Warrior (2006)",
                "metaDescription": "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."

            },
            {

                "id": 3,
                "name": "Warrior",
                "description": "Dan Millman is a university student as well as a locally famous gymnast who dreams of winning a National Championship competition...",
                "price": 12.6,
                "date": 1472042610702,
                "category": 1,
                "weight": 0.5,
                "image": "peaceful_warrior.jpg",
                "identity": "peaceful-warrior",
                "metaTitle": "Peaceful Warrior (2006)",
                "metaDescription": "Peaceful Warrior is a 2006 drama film directed by Victor Salva and written by Kevin Bernhardt based on the novel Way of the Peaceful Warrior by Dan Millman."

            }
        ];

        var productUrl = "/api/v1/products";
        
        $httpBackend.whenGET(productUrl).respond(products);
        
        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
           var product = { "id": 0 };
           var parameters = url.split("/");
           var length = parameters.length;
           var id = parameters[length - 1];

           if(id > 0) {
               for(var i = 0; i < products.length; i ++) {
                   if(products[i].id == id) {
                       product = products[i];
                       break;
                   }
               }
           }
           return [200, product, {}];
        });

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
           var product = angular.fromJson(data);

            if(!product.id) {
                // create new product id
                product.id = products[products.length - 1].id + 1;
                products.push(product);
            } else {
                // update product
                for(var i = 0; i < products.length; i++) {
                    if(products[i].id == product.id) {
                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        // ignore request for files
        $httpBackend.whenGET(/app/).passThrough();
        $httpBackend.whenGET(/common/).passThrough();
        $httpBackend.whenGET(/^\/assets\//).passThrough();
        
        
    })


}());
