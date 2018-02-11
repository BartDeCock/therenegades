var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/concert', {
            templateUrl: 'pages/concert.html',
            controller: 'concertController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })
        .when('/samenstelling', {
            templateUrl: 'pages/samenstelling.html',
            controller: 'samenstellingController'
        })
        .when('/gallerij', {
            templateUrl: 'pages/gallerij.html',
            controller: 'galleryController',
            resolve: {
                images: function (imageService) {
                  return imageService.getImages();
                }
              }
        });
});

app.controller('mainController', function($scope) {
    $scope.message = 'main controller : home';
});

app.controller('concertController', function($scope) {
    $scope.concerts = [
        {date:'21 oktober 2017',location:'CC Belgica, Dendermonde',poster:'posters/affiche-21-10-2017.jpg'},
        {date:'15 december 2017',location:'ergens ginder achter',poster:'posters/flyer_16-4-2016.jpg'}
    ];
});

app.controller('contactController', function($scope) {
    $scope.contacts = [
        {title:'Voorziter',name:'Walter Veyt',email:'therenegades@outlook.com'},
        {title:'Dirigent',name:'Jos  Vermeulen',email:'joskenvermeulen@proximus.be'}
    ];
});

app.controller('galleryController', function($scope) {
    $scope.imageGroup = [];
    imageService.getImages().then(function(response) {
        $scope.imageGroup = response;
    });
    // $scope.imageGroup = chunk(all);
    console.log("imagegroup");
    console.log($scope.imageGroup);
});

app.directive('gallery', function() {
    return {
        replace: true,
        controller: 'galleryController',
        template: '\
            <div ng-repeat="images in imageGroup">\
                <div class="row">\
                    <div ng-repeat="image in images">\
                        <div class="col-sm-6 col-md-4 col-lg-3">\
                            <img ng-src="{{ image }}" class="img-rounded img-responsive image thumbnail">\
                        </div>\
                    </div>\
                </div>\
            </div>'
    }
});

app.controller('samenstellingController', function($scope) {
    $scope.instrumenten = [
        {
            soort : 'Sax', 
            muzikanten : [
                {naam: 'Hugo Christiaens'},
                {naam: 'Gerry Quintelier'},
                {naam: 'Danny Verleyen'},
                {naam: 'Willem De Clercq'},
                {naam: 'Georges Seghers'}
            ]
        },
        {
            soort : 'Trombone',
            muzikanten : [
                {naam: 'Raf Sterckx'},
                {naam: 'Eric Kiekens'},
                {naam: 'VACANT'}
            ]
        },
        {
            soort : 'Bastrombone',
            muzikanten : [
                {naam: 'Dirk Goubert'}
            ]
        },
        {
            soort : 'Trompet',
            muzikanten : [
                {naam: 'Lieven Decoster'},
                {naam: 'Stef Spiessens'},
                {naam: 'Walter Veyt'},
                {naam: 'Carmen Decoster'}
            ]
        },
        {
            soort : 'Drum',
            muzikanten : [
                {naam: 'Marnix De Boom'}
            ]
        },
        {
            soort : 'Gitaar',
            muzikanten : [
                {naam: 'Frankie Vander Slock'}
            ]
        },
        {
            soort : 'Bas',
            muzikanten : [
                {naam: 'Bart Van Isterdael'}
            ]
        },
        {
            soort : 'Piano',
            muzikanten : [
                {naam: 'Robbe Willems'}
            ]
        },
        {
            soort : 'Vocals',
            muzikanten : [
                {naam: 'Hugo Christiaens'}
            ]
        },
        {
            soort : 'Muzikale leiding',
            muzikanten : [
                {naam: 'Jos Vermeulen'}
            ]
        }

    ];
    $scope.muzikanten = [
        {title:'Voorziter',name:'Walter Veyt',email:'therenegades@outlook.com'},
        {title:'Dirigent',name:'Jos  Vermeulen',email:'joskenvermeulen@proximus.be'}
    ];
});

function imageService() {
    function getImages() {
        var all = new Array;
        $.getJSON("images.json", function(result){
            $.each(result, function(i, field){
                all.push(field.src);
            });
            return chunk(all,3);
        });
    }

    return {
        getImages: getImages
    }
}

app.factory('imageService', imageService);

function chunk(arr) {
    console.log(arr);
    console.log("slicing array: " + arr);
    var newArr = [];
    for (var i=0; i<arr.length; i+=3) {
    //   newArr.push([arr[i], arr[i+1], arr[i+2]]);
        newArr.push(arr.slice(i, i+3));
    }
    console.log(newArr);
    return newArr;
  }