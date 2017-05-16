var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=33b3e9c38a078736b54f7e8ebd139ec8&gallery_id=152056256-72157676936377984&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
};

$.ajax(settings).done(function (data) {
  console.log(data);



$("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
      $.each( data.photos.photo, function( i, gp ) {

var farmId = gp.farm;
var serverId = gp.server;
var id = gp.id;
var secret = gp.secret;

console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

//  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

$("#flickr").append('<li><img class="myImg" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/></li>');



});
  $('#flickr').on('click', '.myImg', function(event){
  	var imageSelected = $(event.target);
  	event.preventDefault();
  	
  	var newImg = imageSelected[0].src;
  	console.log(newImg);

	$('#myImg').attr('src', newImg);
    });
});
