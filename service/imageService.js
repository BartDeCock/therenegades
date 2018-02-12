app.service('ImageService', ImageService);

function ImageService($q) {
    var images = undefined;
    
    this.getImages = function() {
        if (!images) {
            var all = [];
            var deferred = $q.defer();
            $.getJSON("images.json", function(result){
                $.each(result, function(i, field){
                    all.push(field.src);
                });
                images = chunk(all,4);
                deferred.resolve(images);
            });
            images = deferred.promise;
        }
        return $q.when(images);
    }
}


function chunk(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }
