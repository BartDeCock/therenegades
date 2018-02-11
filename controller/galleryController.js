app.controller('GalleryController', GalleryController);

function GalleryController($scope, ImageService) {
    $scope.imageGroup = [];
    ImageService.getImages().then(function(response) {
        $scope.imageGroup = response;
    });
    // $scope.imageGroup = chunk(all);
    console.log("imagegroup");
    console.log($scope.imageGroup);
}