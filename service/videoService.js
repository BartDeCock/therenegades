app.service('VideoService', VideoService);

function VideoService($q) {
    var videos = undefined;
    
    this.getVideos = function() {
        console.log('getting video sources');
        if (!videos) {
            var all = [];
            var deferred = $q.defer();
            $.getJSON("videos.json", function(result){
                $.each(result, function(i, field){
                    all.push(field.src);
                    console.log('added vidoe src');
                    console.log(field.src);
                });
                videos = all;
                deferred.resolve(videos);
            });
            videos = deferred.promise;
        }
        return $q.when(videos);
    }
}
