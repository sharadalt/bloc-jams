 // Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// One more Example Album
 var albumSharada = {
     title: 'The Mountains',
     artist: 'Sharada Thimmaiah',
     label: 'EM',
     year: '2016',
     albumArtUrl: 'assets/images/album_covers/21.png',
     songs: [
         { title: 'Life is beautiful', duration: '1:01' },
         { title: 'Take care of nature', duration: '5:01' },
         { title: 'Birds are flying', duration: '3:21'},
         { title: 'Water flowing', duration: '3:14' },
         { title: 'Trees waving', duration: '2:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
     var clickHandler = function() {
       // clickHandler logic
     };
     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
     $row.find('.song-item-number').click(clickHandler);
     $row.hover(onHover, offHover);
     return $row;
  
 };
     // elements to populate dynamically

     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     
     
var setCurrentAlbum = function(album) {
    
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
     $albumSongList.empty();
 
     for (var i = 0; i < album.songs.length; i++) {
       var $newRow = createSongRow(i + 1, album.songs[i].title,album.songs[i].duration);
         $albumSongList.append($newRow);
        
     }
 };


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;
 
 $(document).ready(function() {
   setCurrentAlbum(albumPicasso);
   
   var albums = [albumPicasso, albumMarconi, albumSharada];
   index = 0;
     albumImage.addEventListener("click", function(event){
       setCurrentAlbum(albums[index++]);
       if (index == albums.length){
         index = 0;
       }                          
    });
  
 });