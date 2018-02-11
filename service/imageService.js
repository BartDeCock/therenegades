app.service('ImageService', ImageService);

function ImageService($q) {
    var images = undefined;
    
    this.getImages = function() {
        console.log('getting images');
        if (!images) {
            console.log('images not yet defined');
            var all = [];
            var deferred = $q.defer();
            $.getJSON("images.json", function(result){
                $.each(result, function(i, field){
                    all.push(field.src);
                });
                console.log('all images:')
                console.log(all)
                images = chunk(all);
                deferred.resolve(images);
            });
            images = deferred.promise;
        }
        console.log('return images');
        return $q.when(images);
    }
}


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
