var app = angular
    .module('app', ['ngRoute'])
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        })
        .when('/concert', {
            templateUrl: 'pages/concert.html',
            controller: 'ConcertController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'ContactController'
        })
        .when('/samenstelling', {
            templateUrl: 'pages/samenstelling.html',
            controller: 'SamenstellingController'
        })
        .when('/gallerij', {
            templateUrl: 'pages/gallerij.html',
            controller: 'GalleryController'
        })
        .when('/video', {
            templateUrl: 'pages/video.html',
            controller: 'VideoController'
        });
}

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);
