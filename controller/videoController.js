app.controller('VideoController', VideoController);

function VideoController($scope, VideoService) {
    $scope.videos = [];
    VideoService.getVideos().then(function(response){
        $scope.videos = response;
    });
}